
// A function that iterates through arrays and counts the truthys

const array = [0, 1, 2, '', 3, null];

function countTruthy (array) {
    let truthyCounter = 0;
    for (let index in array)
        if (array[index]) {
            truthyCounter++;
        }   
        console.log(truthyCounter);
}

countTruthy(array);