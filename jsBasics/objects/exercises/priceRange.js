
// Price range objects: inexpensive, moderate, upscale

const azResturants = {
    inexpensive: [
        { name: `a`, address: `b`, reviews: 10,},
    ],
    moderate: [
        { name: `c`, address: `d`, reviews: 10,}
    ],
    upscale: [
        { name: `e`, address: `f`, reviews: 10,}
    ]
};

// Actual Solution

let priceRanges = [
    {label: '$', tooltiop: 'Inexpensive', minPerPerson: 0, MaxPerPerson: 10},
    {label: '$$', tooltiop: 'Moderate', minPerPerson: 11, MaxPerPerson: 20},
    {label: '$$$', tooltiop: 'Expensive', minPerPerson: 21, MaxPerPerson: 50}
];

let resturants = [
    { averagePerPerson: 5 }
];