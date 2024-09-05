import { AfterViewInit, Component, OnInit } from '@angular/core'
import { routes } from '../../app.routes'
import { Router } from '@angular/router'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common'
import { Store } from '@ngrx/store'
import { ItemState } from '../../store/menu.reducer'
import { Observable } from 'rxjs'

interface FoodNode {
  name: string
  path: string
  oldPath: any
  children?: FoodNode[]
}

@Component({
  selector: 'app-menu-crosswise',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, NgIf, NgFor, AsyncPipe, JsonPipe],
  templateUrl: './menu-crosswise.component.html',
  styleUrl: './menu-crosswise.component.scss'
})
export class MenuCrosswiseComponent implements OnInit, AfterViewInit {
  menuItems$: MenuNode[] | undefined

  // menuItems$: Observable<ItemState>

  constructor(private router: Router, private store: Store<{ menu: ItemState }>) {
    // this.menuItems$ = store.select('menu')
    // console.log(this.menuItems$)

    store.select('menu').subscribe((val) => {
      this.menuItems$ = val.list
    })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
