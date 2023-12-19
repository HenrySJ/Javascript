
const numbers = [1, -1, 2, 3];

// every()
// some ()

const allPositive = numbers.every(function(value) {
    //search stops and returns false at first element that doesn't evaluate to true
    return value >= 0;
});

console.log(allPositive);

// HOW TO FILTER ELEMENTS IN AN ARRAY && Mapping an Array

// const filtered = numbers.filter(n => n >= 0 );

// const items = filtered.map(n => ({ value: n}));

// JAVASCRIPT HAS CHAINING TO MAKE CLEARN AND BETTER CODE, THE ABOVE CALLS TO .FILER AND .MAP ARE = TO BELOW

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n}));

console.log(items);



// REDUCING AN ARRAY

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);