import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations'

export const slideInAnimation = trigger('routeAnimations', [
  // transition('HomePage <=> SocialPage', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [style({ left: '-100%' })], { optional: true }),
  //   query(':leave', animateChild(), { optional: true }),
  //   group([
  //     query(':leave', [animate('300ms ease-out', style({ left: '100%' }))], { optional: true }),
  //     query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true })
  //   ])
  // ]),
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ left: '-100%' })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [animate('200ms ease-out', style({ left: '100%', opacity: 0 }))], {
        optional: true
      }),
      query(':enter', [animate('300ms ease-out', style({ left: '0%' }))], { optional: true }),
      query('@*', animateChild(), { optional: true })
    ])
  ])
])

export const sideSetting =  trigger('slideInOut', [
  state('void', style({
    transform: 'translateX(100%)' // 初始状态：在视图右侧外部
  })),
  state('*', style({
    transform: 'translateX(0)' // 完全进入视图时的位置
  })),
  transition(':enter', [
    animate('300ms ease-in') // 元素进入的动画
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({
      transform: 'translateX(100%)' // 元素离开时返回到右侧
    }))
  ])
])