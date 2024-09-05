import { AfterViewInit, Component, OnInit } from '@angular/core'
import { routes } from '../../app.routes'
import { Router } from '@angular/router'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common'
import { Store } from '@ngrx/store'
import { ItemState } from '../../store/menu.reducer'
import { Observable, map } from 'rxjs'
import { MatIcon } from '@angular/material/icon'
import { MenuService } from '../../services/menu.service'

@Component({
  selector: 'app-menu-crosswise',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, NgIf, NgFor, AsyncPipe, JsonPipe, MatIcon],
  templateUrl: './menu-crosswise.component.html',
  styleUrl: './menu-crosswise.component.scss'
})
export class MenuCrosswiseComponent implements OnInit, AfterViewInit {
  menuItems$: MenuNode[] | undefined

  // menuItems$: Observable<ItemState>

  constructor(
    private router: Router,
    private store: Store<{ menu: ItemState }>,
    private menuService: MenuService
  ) {
    // this.menuItems$ = store.select('menu').pipe(map((data: any) => data.list))
    // console.log(this.menuItems$)

    store.select('menu').subscribe((val) => {
      this.menuItems$ = val.list
    })
  }

  menuClick(e: MenuNode) {
    console.log(e)
    this.router.navigate([e.path])
  }

  setting() {

    this.menuService.openSet('open')
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
