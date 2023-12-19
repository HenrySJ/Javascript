
// This function finds and returns the maximum value within a given array

const nums = [1, 2, 3, 4];

// Simple implementation
// function getMax(array) {
//     let currentMax = 0;
//     for (let number of array)
//         if (number > currentMax)
//             currentMax = number;
//     if (currentMax === 0)
//         return undefined;
//     return currentMax;
// }


// Robust implementation

function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((a, b) => (a> b) ? a : b);
}

const max = getMax(nums);
console.log(max);