
// Create an address object with following:
// street
// city
// zipcode
// create a function that can show the properties and value

// This object.method logs the properties and values of address objects
const getAddress = {
    adygetter(obj) {
        for (let key in obj)
            console.log(key, obj[key]);
    }
};


// Camel Notation object initializing function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
}

const myAddress2 = createAddress('8218 W Atlantis way', 'Phoenix', '85043');

getAddress.adygetter(myAddress2);

// pascal notation object initializing function
// function Address(street, city, zipcode) {
//     this.street = street;
//     this.city = city;
//     this.zipcode = zipcode;
// }

// let myAddress = new Address('8218 W Atlantis way', 'Phoenix', '85043');

// getAddress.adygetter(myAddress);
