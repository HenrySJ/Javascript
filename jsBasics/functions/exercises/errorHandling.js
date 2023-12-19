// This code is from the array exercise, Count Occurrences
// Used to practice error handling

function countOccurrences(array, searchElement) {
    if (Array.isArray(array) !== true)
        throw new Error('Please enter an array');

    return array.reduce((accumulator, current) => {
        const occurances = (current === searchElement) ? 1 : 0;
         return accumulator + occurances
    }, 0);
 }

try {
    const numbers = [1, 2, 3, 4, 1, 1, 1, 1];
    console.log(countOccurrences(' ', 1));
}
catch (e) {
    console.log(e.message);
}