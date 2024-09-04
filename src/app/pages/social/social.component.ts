import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services/api.service'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'

export interface PeriodicElement {
  name: string
  position: number
  weight: number
  symbol: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
]

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']
  dataSource = ELEMENT_DATA
  clickedRows = new Set<PeriodicElement>()

  listData: any
  constructor(private http: ApiService) {}
  ngOnInit() {
    // this.http.get('api/articles').subscribe((res) => {
    //   this.listData = res.data.articles
    // })
  }

  form = new FormGroup({
    name: new FormControl(''),
    sel: new FormControl('')
  })

  options = [
    {
      label: '选项111',
      value: 1
    },
    {
      label: '选项222',
      value: 2
    },
    {
      label: '选项333',
      value: 3
    }
  ]

  onSubmit() {
    console.log(this.form.value)
  }

  onChange(e:PageEvent) {
    console.log(e)
  }
}
