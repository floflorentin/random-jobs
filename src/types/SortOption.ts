import job from "./Job";

export interface SortOption {
    field: string
    label: string
    comparator: (a: job, b: job) => number
}

const sortOptions: SortOption[] = [
    {
        field: 'title',
        label: 'Title',
        comparator: (a, b) => (a.title > b.title)? 1:-1,
    },
    {
        field: 'location',
        label: 'Location',
        comparator: (a, b) => (a.location > b.location)? 1:-1,
    },
    {
        field: 'salary',
        label: 'Salary',
        comparator: (a, b) => (a.salary > b.salary)? 1 :- 1,
    },
];

export { sortOptions };