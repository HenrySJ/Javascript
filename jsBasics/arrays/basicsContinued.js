
// // remove elements from an array

// let numbers  = [1, 2, 3, 4];
// let another = numbers;
// // end
// const last = numbers.pop(); // removes the last element

// // begining
// const first = numbers.shift(); // removes the first element

// // Middle
// numbers.splice(2, 1) // first argument is the starting index, second argument is how many elements are removed 

// // How to empty an array

// // solution 1 - points to another object in memory - this only works if there are not any references
// // to original array
// numbers = [];

// // solution 2 - original array is troncrated, regardless of how many other varibles are referred to
// // original object in memory
// numbers.length = 0;

// // solution 3
// numbers.splice(1, numbers.length);

// // solution 4 - this is very noisy
// while (numbers.length > 0)
//     numbers.pop()



// Combing and Slicing Arrays

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];  // Spread Operator, used to combine arrays

// const copy = combined.slice(); // 2 optional parameters, (starting index, ending index)// if (), returns a copy
const copy = [...combined];

console.log(combined);
console.log(slice);

