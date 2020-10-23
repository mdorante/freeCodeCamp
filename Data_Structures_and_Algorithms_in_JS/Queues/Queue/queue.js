/* 
	We're going to implement a Queue using Arrays
	Queues are similar to Stacks, except they work first in, first out
	As opposed to Stacks that work last in, first out
*/

export class Queue {
  constructor() {
    // internal array that contains the queue
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  // puts an item at the end of the queue
  enqueue(item) {
    return this.collection.push(item);
  }

  // takes an item out of the beginning of the queue
  dequeue() {
    return this.collection.shift();
  }

  // returns the item that is at the front of the queue (the first item that will leave the queue) without removing it
  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}
