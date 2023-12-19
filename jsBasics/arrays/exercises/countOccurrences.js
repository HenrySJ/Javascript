
// Function counts the occurances of a given element within a given array

const numbers = [1, 2, 3, 4, 1, 1, 1, 1];

// Basic implementation
// function countOccurrences(array, searchElement) {
//     let count = 0;
//     for (let number of array)
//         if (number === searchElement) {
//             count++;
//             continue;
//         }
//     return count;
// }

// More robust implementation
function countOccurrences(array, searchElement) {
   return array.reduce((accumulator, current) => {
       const occurances = (current === searchElement) ? 1 : 0;
        return accumulator + occurances
   }, 0);
}
console.log(countOccurrences(numbers, 1));