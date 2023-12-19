// Falsy (not boolean false)
// What are falsy?
// undefined
// null
// false
// ''
// Nan (not a number)

// Anything that is not Falsy -> Truthy

// let firstExample = false || true;
// console.log(firstExample);

// let secondExample = false || 'Saint';
// console.log(secondExample);

// let thirdExample = false || 1;
// console.log(thirdExample);

// let fourthExample = false || 1 || 2;
// console.log(fourthExample);

// (||) allows short-circuting
// First Truthy will be return
// Ingoring operands that follow

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

// If usercolor = undefined;
// Default color of blue will be selected
