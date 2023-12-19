
// title
// body
// author
// views
// comments
// (author, body)
// isLive

// const post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 100,
//     comments : [
//         { author: 'a', body: 'b' },
//         { author: 'c', body: 'd' },
//     ],
//     isLive: true
// };

// the user is drafting a post, but they have not published it yet

// isPublished = true;

// function Post(title, body, author) {
//     if (isPublished)
//         this.title = title;
//         this.body = body;
//         this.author = author;
// }

// const blogPost = new Post('a', 'b', 'c');

// The correct method below

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = flase;
}