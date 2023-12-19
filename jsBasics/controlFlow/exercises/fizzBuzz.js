
// Divisible by 3 => Fizz
// Divisbible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz (input) {
    return (typeof(input) !== 'number') ? NaN :
    ((input % 3 === 0) && (input % 5 === 0)) ? 'Fizzbuzz' :
    (input % 3 === 0) ? 'Fizz' :
    (input % 5 === 0) ? 'Buzz' : input;
}
