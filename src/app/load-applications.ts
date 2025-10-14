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
          date: new Date("13/10/2025"),
          company: "exampleCompany",
          job_board: "linkedin",
          status: ApplicationStatus.Applied,
          coverLetter: true,
          detailedApplicationStage: true,
        },
        {
          id: 1,
          job_title: "Junior Cloud Engineer",
          date: new Date("14/10/2025"),
          company: "secondCompany",
          job_board: "indeed",
          status: ApplicationStatus.Applied,
          coverLetter: false,
          detailedApplicationStage: true,
        },
        {
          id: 2,
          job_title: "Junior Devops",
          date: new Date("14/10/2025"),
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
      data.forEach(data => ({
        ...data,
        date: new Date(data.date)
      })
      )
    }
    return data;
  }

  save(jobApplications: JobApplicationInfo[]) {
    localStorage.setItem('applications', JSON.stringify(jobApplications));
  }
}
