import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { SocialComponent } from './pages/social/social.component'
import { NotfoundComponent } from './pages/notfound/notfound.component'
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: '首页',
    data: { animation: 'HomePage' }
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
