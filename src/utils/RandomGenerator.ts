import {faker} from "@faker-js/faker";
import Job from "../types/Job";

function createJob(id: number): Job {
    return {
        title: faker.name.jobTitle(),
        location: faker.address.cityName(),
        company: faker.company.name(),
        salary: faker.finance.amount(1000, 1000000, 0, ''),
        description: faker.commerce.productDescription(),
        companyDesc: faker.name.jobDescriptor(),
        id: id // set your own value or generate one using a library like uuid
    }
}

function createJobsArray(numJobs: number): Job[] {
    const jobs: Job[] = []

    for (let i = 1; i <= numJobs; i++) {
        const job = createJob(i)
        jobs.push(job)
    }
    return jobs
}

export { createJobsArray }