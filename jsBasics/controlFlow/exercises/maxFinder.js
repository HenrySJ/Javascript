// Exercise 1
// A function that takes two numbers and returns the maximum of the two

let firstNum = 3;
let secondNum = 5;

function maxFinder (valueOne, valueTwo) {
    if (valueOne > valueTwo)
        console.log(valueOne);
    else
        console.log(valueTwo);
}

maxFinder(firstNum, secondNum);

// Cleaner implementation

let number = maxFinder(5, 3);
console.log(number);

function max(a, b) {
    return (a > b) ? a : b;
}