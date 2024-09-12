import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-asset',
  standalone: true,
  imports: [],
  templateUrl: './asset.component.html',
  styleUrl: './asset.component.scss'
})
export class AssetComponent implements OnInit {
  constructor(private http: ApiService) {}

  ngOnInit(): void {
    const params = {
      name: 'aa',
      age: 18
    }
    this.http.get('api/user/getMyUserInfo', params).subscribe((res) => {})
  }
}
