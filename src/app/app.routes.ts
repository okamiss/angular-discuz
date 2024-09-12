import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
// import { SocialComponent } from './pages/social/social.component'
// import { LiveComponent } from './pages/live/live.component'
// import { SignComponent } from './pages/live/sign/sign.component'
// import { PkComponent } from './pages/live/pk/pk.component'
// import { PerformanceComponent } from './pages/performance/performance.component'
// import { OrderComponent } from './pages/order/order.component'
// import { AbnormalComponent } from './pages/order/abnormal/abnormal.component'

import { NotfoundComponent } from './pages/notfound/notfound.component'
import { loadingGuard } from './guards/loading.guard'

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: '首页',
    data: { animation: 'HomePage' },
    canActivate: [loadingGuard]
  },
  {
    path: 'live',
    // component: LiveComponent,
    loadComponent: () => import('./pages/live/live.component').then((m) => m.LiveComponent),

    title: '直播管理',
    children: [
      { path: '', redirectTo: 'sign', pathMatch: 'full' },
      {
        path: 'sign',
        // component: SignComponent,
        loadComponent: () =>
          import('./pages/live/sign/sign.component').then((m) => m.SignComponent),
        title: '直播签到统计',
        data: { animation: 'SignPage' }
      },
      {
        path: 'pk',
        // component: PkComponent,
        loadComponent: () => import('./pages/live/pk/pk.component').then((m) => m.PkComponent),
        title: '直播pk',
        data: { animation: 'PkPage' }
      }
    ]
  },
  {
    path: 'performance',
    // component: PerformanceComponent,
    loadComponent: () =>
      import('./pages/performance/performance.component').then((m) => m.PerformanceComponent),
    title: '业绩统计',
    data: { animation: 'PerformancePage' },
    canActivate: [loadingGuard]
  },
  {
    path: 'order',
    // component: OrderComponent,
    loadComponent: () => import('./pages/order/order.component').then((m) => m.OrderComponent),
    title: '订单管理',
    children: [
      { path: '', redirectTo: 'abnormal', pathMatch: 'full' },
      {
        path: 'abnormal',
        // component: AbnormalComponent,
        loadComponent: () =>
          import('./pages/order/abnormal/abnormal.component').then((m) => m.AbnormalComponent),
        title: '异常开单',
        data: { animation: 'AbnormalPage' }
      }
    ]
  },
  {
    path: 'social',
    // component: SocialComponent,
    loadComponent: () => import('./pages/social/social.component').then((m) => m.SocialComponent),
    title: '社交',
    data: { animation: 'SocialPage' }
  },
  {
    title: '公司管理',
    path: 'company',
    loadChildren: () => import('./routes/company/company.routes').then((m) => m.routes)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    component: NotfoundComponent,
    title: '404'
  }
]
