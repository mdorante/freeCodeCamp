// We're going to implement our own Stack class without using arrays

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // adds a value to the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) return undefined;

    // point count to the index of the last item in the stack
    this.count--;

    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // returns the size of the stack (amount of elements it contains)
  size() {
    return this.count;
  }

  // returns the value at the end of the stack without removing it
  peek() {
    return this.storage[this.count - 1];
  }
}

let myStack = new Stack();

console.log(myStack.size()); // 0

myStack.push("ABC");
myStack.push(1);
myStack.push(true);
myStack.push(8);
myStack.push("Q");

console.log(myStack.peek()); // Q
console.log(myStack.size()); // 5

console.log(myStack.pop()); // Q
console.log(myStack.peek()); // 8
console.log(myStack.size()); // 4
