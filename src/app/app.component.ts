import { Component, OnInit } from '@angular/core'
import { ChildrenOutletContexts, RouterLink, RouterModule, RouterOutlet } from '@angular/router'
import { menusList } from './common/menu-data'
import { slideInAnimation } from './animation/slideInAnimation'
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatMenuModule } from '@angular/material/menu'
import { MatButtonModule } from '@angular/material/button'
import { addc, decrement, increment, reset } from './store/counter.actions'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AsyncPipe, JsonPipe } from '@angular/common'
import { MenuComponent } from './pages/menu/menu.component'

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
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  count$: Observable<string>

  menusList = menusList

  num: Observable<number>

  constructor(private contexts: ChildrenOutletContexts, private store: Store<any>) {
    this.count$ = store.select('BBB')
    this.num = store.select('AAA')
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }

  swChange(e: MatSlideToggleChange) {
    console.log(e)
  }

  setThem(e: string) {
    const htmlElement = document.documentElement // 或者 document.querySelector('html');

    if (e !== 'theme-light-azure') {
      htmlElement.className = e
      localStorage.setItem('theme', e)
    } else {
      htmlElement.className = ''
      localStorage.removeItem('theme')
    }
  }

  inc() {
    this.store.dispatch(increment())
  }

  desc() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

  editstr() {
    const sjzf = Math.random()
    this.store.dispatch(addc(String(sjzf)))
  }

  ngOnInit() {
    const htmlElement = document.documentElement
    const getTheme = localStorage.getItem('theme')
    if (getTheme) {
      htmlElement.className = getTheme
    }
  }
}
