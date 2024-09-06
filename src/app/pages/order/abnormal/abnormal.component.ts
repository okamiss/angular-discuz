import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject
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
import { MatButton, MatButtonModule } from '@angular/material/button'
import { ApiService } from '../../../services/api.service'
import { map } from 'rxjs/operators'
import { MatTableModule } from '@angular/material/table'
import { CurrencyPipe } from '@angular/common'
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'

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
    CurrencyPipe,
    MatDialogModule
  ],
  templateUrl: './abnormal.component.html',
  styleUrl: './abnormal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbnormalComponent implements OnInit, AfterViewInit {
  dataSource: AbnormalInterface[] = []
  displayedColumns: string[] = ['id', 'vcname', 'price', 'actions']
  total: number = 0
  pagesParams = {
    page: 1,
    limit: 10
  }
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
    const data: any = { ...this.profileForm.value, ...this.pagesParams }
    for (const key in data) {
      newForm.append(key, data[key])
    }

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
  readonly dialog = inject(MatDialog)

  lookDetail(e: AbnormalInterface) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: e
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`)
    })
  }

  onChange(e: PageEvent) {
    const { pageIndex, pageSize } = e
    this.pagesParams.page = pageIndex + 1
    this.pagesParams.limit = pageSize
    this.onSubmit()
  }

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.onSubmit()
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogContentExampleDialog {
  data = inject(MAT_DIALOG_DATA)
}
