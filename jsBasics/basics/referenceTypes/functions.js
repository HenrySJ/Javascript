// FUNCTIONS ARE REFERENCE TYPES

// Function decelartion
// Performing a task Function

function greet(name, lastName) {
  console.log(`Hello ${name} ${lastName}`);
  // console.log('Hello ' + name + ' ' + lastName);
  // (`String ${argument} ${argument}`); is a form of string contactanation with a ` not '
}

greet("Henry", "Saint-Juste");

// No need for semi-colin
// The parameter 'name' within the () of the function is the parameter
// The parameter will only be accesible inside the function
// Within the () of greet is called the ARGUMENT

// The parameter is set at the time of declaration
// The argument is the value we supply to the parameter

// contactanation of strings console.log('Hello' + name);

// Calculate a Value Function

function square(number) {
  return number * number;
}

// let number = square(2);

// console.log(number);
console.log(square(2));

function numDoubler(num) {
  num * 2;
}

console.log(numDoubler(4));
