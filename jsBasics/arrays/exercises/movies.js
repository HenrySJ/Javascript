
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// console.log(movies);

// All movies in 2018 with rating > 4
// Sort them by their rating * Descending order*
// Pick and log their names

// const filtered = [...movies];

// for (let index in filtered)
//     if (filtered[index].year < 2018)
//         filtered.splice(index, 1);

// for (let index in filtered)
//     if (filtered[index].rating < 4)
//         filtered.splice(index, 1);

const filtered = movies
    .filter(movie => movie.year >= 2018)
    .filter(movie => movie.rating >= 4)
    .sort((a, b) => (b.rating - a.rating));

for (let element of filtered) {
    console.log(element.title);
}