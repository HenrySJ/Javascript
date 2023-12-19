
// Object-oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('Draw');
    }
};
circle.draw(); // Functions in objects are Methods

// Primitives are coped by their value (local scope), Reference types are copied by their reference (gobal scope)

// Obj can be iterated through using for...in loops 
// To use for...of loops, use Object.keys javascript function

const person = {
    name: 'Henry',
    age: '23',
    height: '5ft 10in',
    lead() {
        console.log(`I ${name} am your Leader!`);
    }
};

for (let key in person)
    console.log(key);

for (let index of Object.keys(person))
    console.log(person[index]);

if ('name' in person) console.log('yes');

// Object cloning

const test = {
    radius: 1,
    paint() {
        console.log('paint');
    }
};

// const another = {};
// for (let key in test)
//     another[key] = test[key];

// const antoher = Object.assign({}, test); // can be used for combining multiple objects in 1 

const another = { ...test}; // fastest way to clone an object

console.log(another);

// Date() allows to cycle through optional aruguments

const now = new Date();
const date = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9)

now.setFullYear(2017);
console.log(now); // now.toISOstring() is commonly used in web applications to transfer date between client and server
