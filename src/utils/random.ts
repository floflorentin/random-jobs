
import Job from "../types/Job";

const titles = ['Web Developer', 'Software Engineer', 'Data Analyst', 'UX Designer'];
const locations = ['New York', 'London', 'San Francisco', 'Sydney'];
const salaries = ['30k', '40k', '50k', '60k'];
const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque euismod magna vel leo luctus, vel fermentum nisl euismod.',
    'Vivamus at libero efficitur, luctus justo non, bibendum est.',
    'Donec sodales ipsum non lectus ultrices hendrerit.',
];

function generateRandomJob(): Job {
    const title = titles[Math.floor(Math.random() * titles.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const salary = salaries[Math.floor(Math.random() * salaries.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];

    return {companyDesc: "", company: "", title, location, salary, description, id: Math.random() };
}

function generateRandomJobs(n: number): Job[] {
    const jobs: Job[] = [];
    for (let i = 0; i < n; i++) {
        jobs.push(generateRandomJob());
    }
    return jobs;
}

export default generateRandomJobs;
