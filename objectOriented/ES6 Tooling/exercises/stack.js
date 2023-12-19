
// class Stack {
//     constructor(){
//         this.container = [];
//     }

//     peak() {
//         const index = this.container.length - 1;
//         const item = this.container[index];
//         return item;
//     };
//     pop() {
//         const index = this.container.length - 1;
//         const item = this.container[index]
//         this.container.splice(this.index, 1);
//         return item;
//     };
//     push(value) {
//         this.container.push(value);
//         this.index++;
//     };
//     get count() {
//         return this.container.length;
//     };
// }

// Robust Implementation

const _items = new WeakMap;

class Stack {
    constructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        items = _items.get(this)
        if (items.length === 0)
            throw new Error('Stack is empty.');

        return items.pop();
    }

    peak() {
        const items = _items.get(this);

        if (items.length === 0)
            throw new Error('Stack is empty.');

        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }
}