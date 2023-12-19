let a = "red";
let b = "blue";

console.log(a, b);

// let c = a;
// a = b;
// b = c;

function swapper(valueOne, valueTwo) {
  let valueHolder = valueOne;
  valueOne = valueTwo;
  valueTwo = valueHolder;
}

console.log(swapper(a, b));
