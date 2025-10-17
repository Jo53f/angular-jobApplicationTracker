import { Component, inject, ViewChild, AfterViewInit } from '@angular/core';
import { LoadApplications } from '../load-applications';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationDialog } from '../application-dialog/application-dialog';
import { MatButton } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { JobApplicationInfo } from '../job-application-info';



@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, DatePipe, MatButton, MatPaginatorModule, MatSortModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit {
  // jobApplicationList: JobApplicationInfo[] = [];
  applicationsLoader: LoadApplications = inject(LoadApplications);
  columnToDisplay = ['job_title', 'company', 'date', 'job_board', 'coverLetter', 'detailedApplicationStage', 'status']
  dataSource = new MatTableDataSource<JobApplicationInfo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // reference variable to dialog option
  readonly dialog = inject(MatDialog);

  constructor(){
    this.dataSource.data = this.applicationsLoader.load();
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(ApplicationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        console.log({result})
        const newData = this.dataSource.data;
        newData.push(result);
        this.dataSource.data = newData;
        this.applicationsLoader.save(this.dataSource.data);
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
