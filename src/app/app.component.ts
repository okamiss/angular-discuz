import { Component, OnInit } from '@angular/core'
import { ChildrenOutletContexts, RouterLink, RouterModule, RouterOutlet } from '@angular/router'
// import { menusList } from './common/menu-data'
import { sideSetting, slideInAnimation } from './animation/slideInAnimation'
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
// import { addc, decrement, increment, reset } from './store/counter.actions'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AsyncPipe, JsonPipe } from '@angular/common'
import { MenuComponent } from './pages/menu/menu.component'
import { MenuCrosswiseComponent } from './pages/menu-crosswise/menu-crosswise.component'
import { routes } from './app.routes'
import { menuSave } from './store/menu.actions'
import { MenuService } from './services/menu.service'
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule } from '@angular/forms'

type diretionType = 'crosswise' | 'vertical'

interface SetInterface {
  diretion: diretionType
  theme: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    RouterLink,
    MatSlideToggleModule,
    MatButtonModule,
    MatMenuModule,
    AsyncPipe,
    JsonPipe,
    MenuComponent,
    MenuCrosswiseComponent,
    MatRadioModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation, sideSetting]
})
export class AppComponent implements OnInit {
  logoUrl = 'assets/images/logo.png'

  // count$: Observable<string>

  // menusList = menusList

  // num: Observable<number>

  setting: SetInterface = {
    diretion: 'vertical',
    theme: ''
  }

  setOpen = false
  themeList: string[] = [
    'theme-light-azure',
    'theme-light-rose',
    'theme-dark-magenta',
    'theme-dark-cayn'
  ]

  constructor(
    private contexts: ChildrenOutletContexts,
    private store: Store<any>,
    private menuService: MenuService
  ) {
    // this.count$ = store.select('BBB')
    // this.num = store.select('AAA')
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }

  setThem(e: any) {
    const htmlElement = document.documentElement // 或者 document.querySelector('html');

    const val = e.value

    if (val !== 'theme-light-azure') {
      htmlElement.className = val
      this.setting.theme = val
      localStorage.setItem('setting', JSON.stringify(this.setting))
    } else {
      htmlElement.className = ''
      this.setting.theme = ''
      localStorage.setItem('setting', JSON.stringify(this.setting))
    }
  }

  setMenuChange(e: any) {
    console.log(e.value)
    this.setting.diretion = e.value

    localStorage.setItem('setting', JSON.stringify(this.setting))
  }

  closeDraw() {
    this.setOpen = false
  }

  // inc() {
  //   this.store.dispatch(increment())
  // }

  // desc() {
  //   this.store.dispatch(decrement())
  // }

  // reset() {
  //   this.store.dispatch(reset())
  // }

  // editstr() {
  //   const sjzf = Math.random()
  //   this.store.dispatch(addc(String(sjzf)))
  // }

  filterRouter(routes: any, parentPath: string) {
    return routes
      .filter((item: any) => item.path && item.path !== '**')
      .map((item: any) => {
        let transformedRoute: MenuNode = {
          name: item.title,
          path: parentPath + '/' + item.path,
          enname: item.path
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

  ngOnInit() {
    const settingData = localStorage.getItem('setting')
    const getSet: SetInterface | null = settingData ? JSON.parse(settingData) : null

    // const getSet:SetInterface = JSON.parse(localStorage.getItem('setting'))

    // console.log(getSet);

    if (getSet) {
      this.setting = getSet
      const htmlElement = document.documentElement
      htmlElement.className = this.setting.theme
    }

    const menuArr: MenuNode[] = this.filterRouter(routes, '')

    this.store.dispatch(
      menuSave({
        list: menuArr
      })
    )

    this.menuService.data$.subscribe((data) => {
      this.setOpen = true
    })
  }
}
