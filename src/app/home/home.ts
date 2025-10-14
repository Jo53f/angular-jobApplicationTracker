import { Component, inject } from '@angular/core';
import { LoadApplications } from '../load-applications';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationDialog } from '../application-dialog/application-dialog';
import { MatButton } from '@angular/material/button';



@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, DatePipe, MatButton],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // jobApplicationList: JobApplicationInfo[] = [];
  applicationsLoader: LoadApplications = inject(LoadApplications);
  columnToDisplay = ['job_title', 'company', 'date', 'job_board', 'coverLetter', 'detailedApplicationStage', 'status']
  dataSource = new MatTableDataSource(
    this.applicationsLoader.load()
  );

  // reference variable to dialog option
  readonly dialog = inject(MatDialog);

  constructor(){
    this.applicationsLoader.save(this.dataSource.data);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(): void{
    let job_title = '';
    let company = '';
    let date = new Date();
    let job_board = '';
    let coverLetter = false;
    let detailedApplicationStage = false;

    const dialogRef = this.dialog.open(ApplicationDialog, {
      data: {
        job_title: job_board,
        company: company,
        date: date,
        job_board: job_board,
        coverLetter: coverLetter,
        detailedApplicationStage: detailedApplicationStage
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        console.log({result})
      }
    })
  }
}
