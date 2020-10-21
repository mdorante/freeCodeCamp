/* We're going to implement our own Stack class without using arrays
 A Stack is a data structure which you can use to stack up items,
 but like a real life stack of books, the last item you add is the first available item to remove.
 So basically, you can only add and removes items at the end of the stack
 */

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

const myStack = new Stack();

const word = "racecar";
let reverseWord = "";

// push each letter in word into the stack
for (let i = 0; i < word.length; i++) {
  myStack.push(word[i]);
}

// pop each item off the end of the stack into reverseWord
for (let j in word) {
  reverseWord += myStack.pop();
}

console.log(word, reverseWord);

if (reverseWord === word) console.log(`${word} is a palindrome`);
else console.log(`${word} is NOT a palindrome`);
