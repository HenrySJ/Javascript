
// Factory Function - use camel notation -> oneTwoThreeFourFive
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);

console.log(circle1);

// Constructor Functions - use pascal notation -> OneTwoThreeFourFive
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(2);

// new properties and methods can be added or deleted from objects after creation

function Book(author, releaseYear) {
    this.author = author;
    this.releaseYear = releaseYear;
    this.tell = function() {
        console.log(`${author} authored this in ${releaseYear}`);
    }
}

const book = new Book('Henry', '1997');

book.tell();

console.log(book);
book.color = 'yellow';
console.log(book);
delete book.color; // used to delete properties or methods from objects
console.log(book);
