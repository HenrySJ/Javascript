// The types of loops in javascript
// For, While, Do...While / For...in, For...of

// for (let i = 0; i < 5; i++) {
//     if (i % 2 !== 0) console.log('Hello World', i);
// }

// let i = 0;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log('Hello World', i);
//     i++;
// }

// do-while

// let i = 0;
// do {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// } while (i <= 5)

// For-in loops are used to iterate through elements of an object or array.

const person = {
  name: "Saint",
  age: 22,
};

for (let key in person) console.log(key);

// This displays the name of the property within the object, but not the value
// To display value, do the following

for (let key in person) console.log(key, person[key]);

for (let index in colors) console.log(index, colors[index]);

// Ideal way to iterate through arrays is using For-Of loops

// for-of

const colors = ["red", "green", "blue"];

for (let color of colors) console.log(solor);

// RECAPE - USE FOR-IN TO ITERATE THOUGH PROPERTIES OF AN OBJECT
// USE FOR-OF TO ITERATE THROUGH ELEMENTS IN AN ARRAY
