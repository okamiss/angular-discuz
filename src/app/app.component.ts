import { Component } from '@angular/core'
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
    JsonPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  count$: Observable<string>
  
  menusList = menusList


  num: Observable<number>
  store: any

  constructor(private contexts: ChildrenOutletContexts, store: Store<any>) {
    this.count$ = store.select('BBB')
    this.num = store.select('AAA')
    this.store = store

  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation']
  }

  swChange(e: MatSlideToggleChange) {
    console.log(e)
  }

  setThem(e: number) {
    console.log(e)
  }

  inc() {
    this.store.dispatch(increment())
  }

  desc() {
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }



  editstr() {
    const sjzf = Math.random()
    this.store.dispatch(addc(String(sjzf)))
  }
}
