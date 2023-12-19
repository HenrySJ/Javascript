

// A function that creates an array of numbers between the min and max of any + or = integer

function arrayFromRange(min, max) {
    let range = [];
    for (i = min; i <= max; i++) {
        range.push(i);
    }
    console.log(range);
}

const numbers = arrayFromRange(1, 20);
