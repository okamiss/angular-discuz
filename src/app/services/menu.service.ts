import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor() {}

  private dataSubject = new Subject<string>()
  data$ = this.dataSubject.asObservable()

  openSet(data: string) {
    this.dataSubject.next(data)
  }
}
