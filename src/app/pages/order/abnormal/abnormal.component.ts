import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { MatDatepickerModule } from '@angular/material/datepicker'

import { MatIcon } from '@angular/material/icon'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatButton } from '@angular/material/button'
import { ApiService } from '../../../services/api.service'
import { map } from 'rxjs/operators'
import { MatTableModule } from '@angular/material/table'
import { CurrencyPipe } from '@angular/common'
import { MatPaginatorModule } from '@angular/material/paginator'

@Component({
  selector: 'app-abnormal',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIcon,
    MatDatepickerModule,
    MatButton,
    MatTableModule,
    MatPaginatorModule,
    CurrencyPipe
  ],
  templateUrl: './abnormal.component.html',
  styleUrl: './abnormal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbnormalComponent implements OnInit, AfterViewInit {
  dataSource = []
  displayedColumns: string[] = ['id', 'vcname','price','actions']
  total: number = 0
  // ChangeDetectorRef
  constructor(private http: ApiService, private cd: ChangeDetectorRef) {}

  profileForm = new FormGroup({
    vccustomerid: new FormControl(''),
    vcname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    start_apply_time: new FormControl<Date | null>(null, [Validators.required]),
    end_apply_time: new FormControl<Date | null>(null, [Validators.required]),
    start_audit_time: new FormControl<Date | null>(null),
    end_audit_time: new FormControl<Date | null>(null)
  })

  onSubmit() {
    // console.log(this.profileForm.value)
    // console.log(this.profileForm.valid)

    const newForm = new FormData()

    this.http
      .post('api/compliance/abNormalApplyList', newForm)
      .pipe(map((v) => v.data))
      .subscribe((val) => {
        const { data, total } = val
        this.dataSource = data
        this.total = total
        this.cd.detectChanges()
      })
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.onSubmit()
  }
}
