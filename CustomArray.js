"use strict";
// Array data structure
class CustomArray {
    constructor(length) {
        this.length = length;
        this.items = [];
        this.count = 0;
    }
    insert(item) {
        this.items[this.count] = item;
        this.count++;
    }
    print() {
        for (let i = 0; i < this.count; i++) {
            console.log(this.items[i]);
        }
    }
}
const clothes = new CustomArray(3);
clothes.insert('bags');
clothes.insert('dress');
clothes.print();
