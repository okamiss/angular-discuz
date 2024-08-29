import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { httpInterceptor } from './utils/http.interceptor'
import { provideState, provideStore } from '@ngrx/store'
import { counterReducer, newsReducer } from './store/counter.reducer'
import { provideStoreDevtools } from '@ngrx/store-devtools'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    provideAnimationsAsync(),
    provideStore(),
    provideState('AAA',counterReducer),
    provideState('BBB',newsReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
}
