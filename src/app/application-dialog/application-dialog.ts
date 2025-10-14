import { Component, inject, model } from '@angular/core';
import { 
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle }
  from '@angular/material/dialog';
import { JobApplicationInfo } from '../job-application-info';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';


@Component({
  selector: 'app-application-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatInputModule, FormsModule, MatDialogActions, MatButtonModule, MatDialogClose, MatDatepickerModule, ReactiveFormsModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './application-dialog.html',
  styleUrl: './application-dialog.css'
})
export class ApplicationDialog {
  readonly dialogRef = inject(MatDialogRef<ApplicationDialog>);
  readonly data = inject<JobApplicationInfo>(MAT_DIALOG_DATA);

  readonly job_title = model(this.data.job_title);
  readonly company = model(this.data.company);
  readonly date = new FormControl(new Date());
  readonly job_board = model(this.data.job_board);
  readonly coverLetter = model(this.data.coverLetter);
  readonly detailedApplication = model(this.data.detailedApplicationStage);
  readonly status = model(this.data.status)

  onNoClick():void{
    this.dialogRef.close();
  }
}
