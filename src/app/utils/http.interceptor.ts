import { HttpInterceptorFn } from '@angular/common/http'
import { filter, map, tap } from 'rxjs/operators'

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      token: 'sfsf'
    }
  })
  // console.log(req, '@@@@@')
  return next(clonedRequest)



  // return next(clonedRequest).pipe(
  //   tap({
  //     next: (event) => {
  //       // 成功响应处理
  //       // console.log('成功响应:', event)
  //     },
  //     error: (error) => {
  //       // 错误响应处理
  //       // console.error('错误响应:', error)
  //     }
  //   })
  // )
}
