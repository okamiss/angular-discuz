import { AfterViewInit, Component, OnInit } from '@angular/core'
import { routes } from '../../app.routes'
import { Router } from '@angular/router'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { NgFor, NgIf } from '@angular/common'

interface FoodNode {
  name: string
  path: string
  oldPath: any
  children?: FoodNode[]
}

@Component({
  selector: 'app-menu-crosswise',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, NgIf, NgFor],
  templateUrl: './menu-crosswise.component.html',
  styleUrl: './menu-crosswise.component.scss'
})
export class MenuCrosswiseComponent implements OnInit,AfterViewInit {
  menuItems: FoodNode[] = []

  constructor(private router: Router) {}
  filterRouter(routes: any, parentPath: string) {
    return routes
      .filter((item: any) => item.path && item.path !== '**')
      .map((item: any) => {
        let transformedRoute: FoodNode = {
          name: item.title,
          path: parentPath + '/' + item.path,
          oldPath: item.path
        }

        if (item.children) {
          const filteredChildren = this.filterRouter(item.children, item.path)
          if (filteredChildren.length > 0) {
            transformedRoute.children = filteredChildren
          }
        }
        return transformedRoute
      })
  }

  ngOnInit(): void {
    console.log(routes, '@@@@@@@@')
    this.menuItems = this.filterRouter(routes, '')
    console.log(this.menuItems)
  }

  ngAfterViewInit(): void {
   
  }
}
