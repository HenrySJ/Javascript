// Function that takes a varying ammount of argumnets and returns its sum
// Its modifyed to accept an array and still return the result

// function sum(initialInput, ...rest) {
//     if (Array.isArray(initialInput)) {
//         return initialInput.reduce((a, b) => a + b);
//     }

//     const sum = rest.reduce((a, b) => a + b);
//     return sum + initialInput;
// }

// More robust implementation

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
