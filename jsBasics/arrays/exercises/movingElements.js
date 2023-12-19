
// Function whose parameters are an array, index of the target element and an offset ammount (+/-) to change its index

const numbers  = [1, 2, 3, 4];

function move(array, index, offset) {
    const output = array;
    const element = output[index];
    const newIndex = index + offset;
    
    if (newIndex < 0 )
        return console.error('Invalid index argument');
    
    output.splice(index, 1);
    output.splice(newIndex, 0, element);
    return output;
}

// Cleaner Mosh Impementation

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) { // more robust condition to display error message
        console.error('Invalid offset.');
        return;
    }

    const output = [...array]; // Spread operator used to prevent original array being edited
    const element = output.splice(index, 1)[0]; // Cleaner iniatilization compared to line 7-9
    output.splice(position, 0, element); // Similar 
    return output;
}

console.log(move(numbers, 0, 1));
console.log(numbers);