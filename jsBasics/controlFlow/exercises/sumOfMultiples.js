
// Add the sum of the multiples of 3 and 5 up to, and included, the limit

function sum(limit) {
    let total = 0;

    for (let i = 0; i <= limit; i++)
        (i % 3 === 0 || i % 5 === 0) ? total += i : false;
    
    return(total);
}
console.log(sum(1000));

// let testArray = [1, 2, 3, 4];

// x = 0;
// for (let key in testArray) {
//     x = x + testArray[key];
// }
// console.log(x);


// for (i = 0; i < 5; i++) {
//     testArray = testArray + [,1];
// }
// console.log(testArray);
