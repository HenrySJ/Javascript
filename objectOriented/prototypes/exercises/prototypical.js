
//                                          Prototypical Exercise Part 1
// HtmlElement has 1 instance method and 1 prototypical method.
// The prototype of HtmlSelectElement is set to an instance of HtmlElement so that it has access to both
// the instance and prototypical methods of HtmlElement

function HtmlElement() {
    this.click = function() {
        console.log('click');
    };
}

HtmlElement.prototype.foucs = function() {
    console.log('focus');
}

function HtmlSelectElement(...array) {
    this.items = [...array] || [];

    this.render = function() {
        return `
        <select>${this.items.map(item => `
            <option>${item}</option>`).join('')}
        </select>`;
    };
    this.addItem = function(item) {
        this.items.push(item);
        };
    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
}

HtmlSelectElement.prototype = new HtmlElement(); // setting the prototype of one object to an instance of another


//                                             Prototypical Exercise Part 2

function HtmlImageElement(source) {
    this.source = source;
    this.render = function() {
        return `<img source="${this.source}" />`
    };
}

HtmlImageElement.prototype = new HtmlElement();

const elements = [
    new HtmlSelectElement(1, 2, 3),
    new HtmlImageElement('http://'),
];

for (let element of elements)
    console.log(element.render());