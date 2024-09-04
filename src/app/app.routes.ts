import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { SocialComponent } from './pages/social/social.component'
import { NotfoundComponent } from './pages/notfound/notfound.component'
import { LiveComponent } from './pages/live/live.component'
import { SignComponent } from './pages/live/sign/sign.component'
import { PkComponent } from './pages/live/pk/pk.component'
import { PerformanceComponent } from './pages/performance/performance.component'
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: '首页',
    data: { animation: 'HomePage' }
  },
  {
    path: 'live',
    component: LiveComponent,
    title: '直播管理',
    data: { animation: 'LivePage' },
    children: [
      { path: '', redirectTo: 'sign', pathMatch: 'full' },
      {
        path: 'sign',
        component: SignComponent,
        title: '直播签到统计',
        data: { animation: 'SignPage' }
      },
      {
        path: 'pk',
        component: PkComponent,
        title: '直播pk',
        data: { animation: 'PkPage' }
      }
    ]
  },
  {
    path: 'performance',
    component: PerformanceComponent,
    title: '业绩统计',
    data: { animation: 'PerformancePage' }
  },
  {
    path: 'social',
    component: SocialComponent,
    title: '社交',
    data: { animation: 'SocialPage' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: NotfoundComponent,
    title: '404'
  }
]
