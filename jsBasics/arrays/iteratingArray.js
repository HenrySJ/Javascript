
const numbers = [1, 2, 3, 4];

for (let number of numbers)
    console.log(number);

// numbers.forEach(function(number) {
//     console.log(number)
// });

// also optional index paramenter to log the number along w/ its index 
numbers.forEach((number, index) => console.log(number, index)); // Each achive the same thing


// Joining arrays -- useful for converting to URL slug

const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);


// SORTING ARRAYS
// for primitives
const moreNumbers = [3, 5, 2, 4, 1];
moreNumbers.sort();
console.log(moreNumbers);

moreNumbers.reverse();
console.log(moreNumbers);

// for references

const courses = [
    { id: 1, name: 'Node.js'},
    { id: 2, name: 'Javascript'},
];

// because ascii table, case sensitivity interfers with sorting objects with strings, use .toLowerCase(); to help
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a= b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});