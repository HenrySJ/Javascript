
// A function that outputs all string properties of an object

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties (obj) {
    for (let index in obj) {
        if (typeof(movie[index]) === 'string')
            console.log(index, obj[index]);
    }
}

showProperties(movie);