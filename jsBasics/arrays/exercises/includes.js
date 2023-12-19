
// Pretend .includes is not a method of arrays
// Write a function that behaves like the .includes method

const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
    for (let element of array)
        if (searchElement === element)
            return true;

    return false;
}

console.log(includes(numbers, 5));