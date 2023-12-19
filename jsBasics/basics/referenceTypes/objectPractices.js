// OBJECTS ARE MUTIFACETED VARIBLES - REFERENCE TYPE

// use 'let' is value can be changed w/ future event; else, use 'const'

let person = {
  name: "Henry",
  age: 24,
  email: "hbstjuste@gmail.com",
};

function sendEmail(email) {
  console.log(email);
}

sendEmail(person.age);
// Use {} for object initialization

// Dot notation
console.log(person.name);

// If 'console.log(person);', the name and age will be displayed
// To display particular facet of an object, use dot notaiton

// Bracket notation
let selection = "name";
person[selection] = "Saint";

console.log(person[selection]);

// Bracket allows target property being targeted within the person object to be dynamic
// If the target property is static, dot notation; else, if target property can be selected by user,
// use bracket notation
