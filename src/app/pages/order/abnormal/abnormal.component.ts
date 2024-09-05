import { Component } from '@angular/core'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatDatepickerModule } from '@angular/material/datepicker'

import { MatIcon } from '@angular/material/icon'
import { provideNativeDateAdapter } from '@angular/material/core'

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
    MatDatepickerModule
  ],
  templateUrl: './abnormal.component.html',
  styleUrl: './abnormal.component.scss'
})
export class AbnormalComponent {
  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl('')
  })

  onSubmit() {
    console.log(this.profileForm.value)
  }
}
