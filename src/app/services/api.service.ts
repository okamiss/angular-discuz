import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000' // 替换为你的接口基础URL

  constructor(private http: HttpClient) {}

  // GET 请求
  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`)
  }

  // POST 请求
  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data)
  }

  // 其他HTTP请求方法根据需要添加，如PUT、DELETE等
}
