
// hoisting, moves all function declaration to the top of the file automatically at run time
// Function Declaration
function walk() {
    console.log('walk');
}

// Anonymous Function Expresion
let run = function() {
    console.log('run');
};

// To have function that can handle any numner of aruguments use Rest operator
// Rest operator turns the remaining arguments into an irritable object

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

// default parameters, all parameters after the 1st default value, must also have a default value

function interestRate(principle, rate = 3.5, years = 5) {
    return principle * rate / 100 * years;
}

// Getters and setters and error handling

const person = {
    firstName: 'Henry',
    lastName: 'Saint-Juste',
    get fullName() {
        return (`${firstName} ${lastName}`);
    },
    set fullName(value) {
        if (typeof value !== 'string');
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');
            
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = ' ';
}
catch (e) {
    console.log(e);
}

console.log(person);
