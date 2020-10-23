import { priorityQueue } from "./priorityQueue.js";

function testEnqueue() {
  const queue = new priorityQueue();

  queue.enqueue(["a", 1]);
  queue.enqueue(["d", 3]);
  queue.enqueue(["b", 1]);
  queue.enqueue(["c", 2]);

  queue.print();
}

function testPrint() {
  const queue = new priorityQueue();

  console.log("Before first enqueue:");
  queue.print();

  queue.enqueue(["a", 2]);
  console.log("\nAfter enqueue:");
  queue.print();
}

function testDequeue() {
  const queue = new priorityQueue();

  queue.enqueue(["a", 4]);
  queue.enqueue(["b", 17]);
  queue.enqueue(["c", 34]);
  queue.enqueue(["d", 2]);

  console.log("Before first dequeue:");
  queue.print();

  const removedItem = queue.dequeue();

  console.log("After first dequeue");
  queue.print();

  console.log(`\nRemoved item: ${removedItem}`);
}

function testFront() {
  const queue = new priorityQueue();

  queue.enqueue(["a", 2]);
  queue.enqueue(["b", 1]);
  queue.enqueue(["c", 3]);
  queue.enqueue(["d", 2]);

  console.log(`The first item that will leave is: ${queue.front()}`);
  queue.print();
}

function testSize() {
  const queue = new priorityQueue();

  queue.print();
  console.log(`Size before adding items: ${queue.size()}`);

  queue.enqueue(["a", 2]);
  queue.enqueue(["b", 1]);
  queue.enqueue(["c", 3]);
  queue.enqueue(["d", 2]);

  queue.print();
  console.log(`Size after adding items: ${queue.size()}`);
}

function testIsEmpty() {
  const queue1 = new priorityQueue();
  const queue2 = new priorityQueue();

  queue2.enqueue([4, 5]);

  console.log("Queue 1:");
  queue1.print();
  if (queue1.isEmpty()) console.log("queue1 is empty");

  console.log("\nQueue 2:");
  queue2.print();
  if (!queue2.isEmpty()) console.log("queue2 is not empty");
}

// testEnqueue();
// testPrint();
// testDequeue();
// testFront();
// testSize();
// testIsEmpty();
