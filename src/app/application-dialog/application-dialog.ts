import { Component, inject } from '@angular/core';
import { 
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle }
  from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@Component({
  selector: 'app-application-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatInputModule, FormsModule, MatDialogActions, MatButtonModule, MatDialogClose, MatDatepickerModule, ReactiveFormsModule, MatDatepickerModule, MatCheckboxModule, MatButtonToggleModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './application-dialog.html',
  styleUrl: './application-dialog.css'
})
export class ApplicationDialog {
  readonly dialogRef = inject(MatDialogRef<ApplicationDialog>);
  readonly data = inject(MAT_DIALOG_DATA);

  readonly currentStatus = new FormControl('Applied');

  onNoClick():void{
    this.dialogRef.close();
  }
}
