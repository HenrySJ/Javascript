
// Primary Constructor function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}

// Secondary Constructor function
// function CreateAddress(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// const address1 = new Address('a', 'b', 'c');
// const address2 = new Address('c', 'b', 'a');
// const address3 = new CreateAddress('a', 'b', 'c');

// // Are all the properties ===
// Object.size = function(obj) {
//     let size = 0;
//     for (let key in obj)
//         if (obj[key]) size++;
    
//     return size;
// } 

// function areEqual(address1, address2) {     
//     if (Object.size(address1 !== Object.size(address2)))
//         console.log(`They are not equal`);  
//     for (let key in address1, address2)
//         if (address1[key] !== address2[key]) return console.log(`They are not equal`);

//     return console.log('They are equal');
// }

// areEqual(address1, address2);

// // Are the object referrencing the same global object
// function areSame(address1, address2) {
//     return (address1.constructor === address2.constructor) ? console.log('Same') : console.log('Not Same');
// }

// // areSame(address1, address2);

// Easier implementation

const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');

// function 1 checks if 2 or more objects have the same properties
function areEqual(address1, address2) {
    return (address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipcode === address2.zipcode)
}

// function 2 checks if 2 objects are pointing to the same reference in memory
function areSame(address1, address2) {
    return (address1 === address2);
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));