import { CanActivateFn } from '@angular/router'

import { LoadingService } from '../services/loading.service'
import { inject } from '@angular/core'

export const loadingGuard: CanActivateFn = (route, state) => {
  const loadingService = inject(LoadingService)

  loadingService.show()

  // return true

  return new Promise((resolve) => {
    // 模拟异步操作（例如数据加载完成）
    setTimeout(() => {
      loadingService.hide() // 路由完成后隐藏进度条
      resolve(true) // 路由允许激活
    }, 1000) // 模拟1秒延迟，实际可以根据业务需求设置
  })
}
