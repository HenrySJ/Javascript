
// Avoid using the "var" keyword because it creates varibles that are function scoped, not code-block scoped
// var also attaches itself to the window object, whitch can interfere with other elements of 3rd party libraries


// The "this" keyword, references the object that executing the current function
// method -> "this" references the object
// function -> "this" references the (window (browsers), global (node))

// Example of using "this" properly to log the name along with the tags in the following video object

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};
// THE BEST WAY TO RETAIN VALUE OF THIS FOR USE IN METHODS IS TO USE ARROW FUNCTIONS LIKE THE FOLLOWING!
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};

// video.showTags()

// Other methods to change the reference of "this", if the function doesn't take a second parameter like forEach above!

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         });
//     }
// };

// Example of preferred approach


// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name: 'Mosh'}, 1, 2) // the first argument of "call" will be used as the value of this
// // playVideo(); // "this" would referrence the global window
// playVideo.apply({name: 'Mosh'}, [1, 2]); // apply works similarly to call. however additional parameters must be in an array
// playVideo.bind({name: 'Mosh'})(); // () immediately calls the function created by bind