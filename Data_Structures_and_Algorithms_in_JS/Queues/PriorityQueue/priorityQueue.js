/*
  Priority Queues are similar to regular Queues, except you add items with priorities
  For all items with the same priority, the queue works exactly like a normal one.
  But items with higher priority move towards the front of the queue
  Ex: priority 5 items will move to the front of the queue, while priority 1 moves to the back of the queue
*/

export class priorityQueue {
  constructor() {
    // internal array that contains the queue
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  // puts an item at the end of the queue (depending on its priority)
  enqueue(item) {
    if (this.isEmpty()) this.collection.push(item);
    else {
      let added = false;

      // searches for the first item with a higher priority level and inserts the new item in that position (before the item with the higher priority)
      for (let i = 0; i < this.collection.length; i++) {
        if (item[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, item);
          added = true;
          break;
        }
      }

      if (!added) this.collection.push(item);
    }
  }

  // takes an item out of the front of the queue
  dequeue() {
    return this.collection.shift()[0];
  }

  // returns the item that is at the front of the queue (the first item that will leave the queue) without removing it
  front() {
    return this.collection[0][0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}
