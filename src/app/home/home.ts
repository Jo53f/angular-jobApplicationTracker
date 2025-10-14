import { Component, inject } from '@angular/core';
import { JobApplicationInfo } from '../job-application-info';
import { LoadApplications } from '../load-applications';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, DatePipe],
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

  constructor(){
    this.applicationsLoader.save(this.dataSource.data);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
