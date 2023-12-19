
// function showPrimes(limit) {
//     for (i = 2; i <= limit; i++) {
//         if (i === 2 || i === 3 || i === 5 || i === 7)
//             console.log(i);
//         if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 9 !== 0)
//             console.log(i);
//     }
// }

// showPrimes(1000);

// my first iteration is terrible that only works for numbers < 100, the following a better way

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number ++) {

//         let isPrime = true;
//         for (let factor = 2; factor < number; factor++) {
//             if (number % factor === 0) {
//                 isPrime =false;
//                 break;
//             }
//         }

//         if (isPrime) console.log(number);
//     }
// }

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;

    return true;
}

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

showPrimes(50);