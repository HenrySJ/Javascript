const numbers = [3, 4];
const numbers = [];

// End
numbers.push(5, 6); // places argumnets to the end of an arry

// Begining
numbers.unshift(1, 2); // places arguments to the begining of an array

// Middle
numbers.splice(2, 0, "a", "b"); // first argument is starting position, second argument is how many elements are removed
console.log(numbers);

// Finding elements - Primitive

const newNumbers = [1, 2, 3, 1, 4];

newNumbers.indexOf(1); // returns the index of the item, if it doesn't exit it will return -1
newNumbers.lastIndexOf(1);

console.log(newNumbers.indexOf(1) !== -1); // returns true is the given element is in the array
console.log(newNumbers.includes(1)); // better way to return true if a given element is in the array
// there is an optional second argument (fromIndex) ; which is the starting index for the search

// Finding elements - references

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

// predicate function
// courses.findIndex returns the index of the first element that matches the critiea
// const course = courses.find(function(course) {
//     return course.name === 'a';
// });
// console.log(course);

// simpler method

const course = courses.find((course) => course.name === "a");
console.log(course);
