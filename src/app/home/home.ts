import { Component, inject } from '@angular/core';
import { JobApplicationInfo } from '../job-application-info';
import { LoadApplications } from '../load-applications';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  jobApplicationList: JobApplicationInfo[] = [];
  applicationsLoader: LoadApplications = inject(LoadApplications);

  constructor(){
    this.jobApplicationList = this.applicationsLoader.load();
    this.applicationsLoader.save(this.jobApplicationList);
  }
}
