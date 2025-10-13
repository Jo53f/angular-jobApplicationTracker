import { ApplicationStatus } from "./application-status"

export interface JobApplicationInfo {
    id: number,
    job_title: string,
    date: Date,
    company: string,
    job_board: string,
    status: ApplicationStatus,
    coverLetter: boolean,
    detailedApplicationStage: boolean,
}
