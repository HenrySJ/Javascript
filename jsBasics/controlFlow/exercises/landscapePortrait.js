// Exercise 2
// A function that returns whether a picture is landscape or portrait

let layout = isLandscape(12, 12);
console.log(layout);

function isLandscape(width, height) {
    return (width > height) ? 'Landscape' : 'Portrait';
}