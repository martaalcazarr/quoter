export const COMPANIES = [
    {id:1, name: 'Motlife' },
    {id:2, name: 'Asurlife'},
    {id:3, name: 'Safelife'}
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
    new Array(65),
    (value, index) => YEARMAX -index
);

export const PLANS = [
    {id:1, name: 'Basic' },
    {id:2, name: 'Complete'},
];