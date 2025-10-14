import { Injectable } from '@angular/core';
import { JobApplicationInfo } from './job-application-info';
import { ApplicationStatus } from './application-status';

@Injectable({
  providedIn: 'root'
})
export class LoadApplications {

  jobApplications: JobApplicationInfo[] = [
        {
          id: 0,
          job_title: "Junior Programmer",
          date: new Date("2025/10/13"),
          company: "exampleCompany",
          job_board: "linkedin",
          status: ApplicationStatus.Applied,
          coverLetter: true,
          detailedApplicationStage: true,
        },
        {
          id: 1,
          job_title: "Junior Cloud Engineer",
          date: new Date("2025/10/14"),
          company: "secondCompany",
          job_board: "indeed",
          status: ApplicationStatus.Applied,
          coverLetter: false,
          detailedApplicationStage: true,
        },
        {
          id: 2,
          job_title: "Junior Devops",
          date: new Date("2025/10/14"),
          company: "thirdCompany",
          job_board: "linkedin",
          status: ApplicationStatus.Applied,
          coverLetter: false,
          detailedApplicationStage: true,
        }
      ]

  load(): JobApplicationInfo[] {
    let data: JobApplicationInfo[] = JSON.parse(localStorage.getItem('applications') || '[]');

    if (data.length === 0) {
      data = this.jobApplications
    } else {
      data.forEach(item => {
        item.date = new Date(item.date);
      });
    }
    return data;
  }

  save(jobApplications: JobApplicationInfo[]) {
    localStorage.setItem('applications', JSON.stringify(jobApplications));
  }
}
