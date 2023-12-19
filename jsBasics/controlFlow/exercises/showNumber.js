
// A function that shows all the numbers from 0 to the parameter (limit)
// Also logs wether they are even or odd

showNumbers(10);

// function showNumbers (limit) {
//     let i = 0;
//     while (i <= limit) {
//         ((i === 0) || (i % 2 === 0)) ? console.log(i, 'even') :
//         console.log(i, 'Odd')
//         i++;
//     }
// }

// Cleaner Implementation

function showNumbers (limit) {
    for (let i =0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'Odd'
        console.log(i, message);
    }
}