// BEST PRACTICES FOR VARIBLES

// Cannnot be reserved keyword (if, let)
// Should be meaningful (don't use x, a1,)
// Cannot start with a number (1name)
// Cannot contain and space or hyphen (-)
//  Are sensitive (firstName ≠ Firstname)

// Best practice is to initilize each variable on seperate line

const firstName = "Henry";

let lastName = "Saint Juste";

// console.log(firstName, lastName);

// BEST PRACTICES COND'T

// "let" initializes varibles whose values can be changed after

let name = "Saint";
// console.log(name);

name = "Saint1";
// console.log(name);

// The first log displays the valaue of the 'name' as 'Saint'
// The second log displays the value after it was changed to 'Saint1'
// Runnning 'node bestPractices.js' in terminal will display both values in respective order of intialization

// "const" initializes a constant varible whose value cannot be changed after
// Any attempt to due so will result in an error

const empty = 0;
//empty = 1; commented out leads to smooth code; else, an error when trying to change value of const
// console.log(empty);
