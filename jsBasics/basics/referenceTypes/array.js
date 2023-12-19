// ARRAYS ARE REFERENCE TYPE

let selectedColors = ['red', 'blue']; // Array Literal
console.log(selectedColors);

// Using brackets, we can insert a value into a given position within an array
selectedColors[2] = 'green';
// Date instered is dynamic; number, string, etc can we inserted in any given array

console.log(selectedColors);
console.log(typeof selectedColors);

// Using dot notation, we can call any property of a given array.

console.log(selectedColors.length);
