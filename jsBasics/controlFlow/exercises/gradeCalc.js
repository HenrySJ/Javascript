
// const marks = [0, 0, 95, 76, 100];

// 1-59:   F
// 60-69:  D
// 70-79:  C
// 80-89:  B
// 90-100: A

// function calculateGrade(marks) {
//     let total = 0;
//     let value = marks.length;

//     for (let key in marks)
//         total += marks[key];
//     average = (total / value);
    
//     if (average >= 1 && average < 60) 
//         return (average + ' F');
//     else if (average >= 60 && average < 70)
//         return (average + ' D');
//     else if (average >= 70 && average < 80)
//         return (average + ' C');
//     else if (average >= 80 && average < 90)
//         return (average + ' B');
//     else if (average >= 90)
//         return (average + ' A');
// }

// console.log(calculateGrade(array));

// simpler implementation - each funciton has 1 responsibility

const marks = [0, 0, 95, 76, 100];

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

function calcGrades (marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

console.log(calcGrades(marks));