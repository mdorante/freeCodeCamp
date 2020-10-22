import { Queue } from "./queueArray.js";

function testEnqueue() {
  const queue = new Queue();

  if (queue.enqueue("a") === 1) console.log("Successfully enqueued an item");

  queue.enqueue("b");
  queue.enqueue("c");
  queue.enqueue("d");

  queue.print();
}

function testPrint() {
  const queue = new Queue();

  console.log("Before first enqueue:");
  queue.print();

  queue.enqueue("a");
  console.log("\nAfter enqueue:");
  queue.print();
}

function testDequeue() {
  const queue = new Queue();

  queue.enqueue("a");
  queue.enqueue("b");
  queue.enqueue("c");
  queue.enqueue("d");

  console.log("Before first dequeue:");
  queue.print();

  const removedItem = queue.dequeue();

  console.log("After first dequeue");
  queue.print();

  console.log(`\nRemoved item: ${removedItem}`);
}

function testFront() {
  const queue = new Queue();

  queue.enqueue("a");
  queue.enqueue("b");
  queue.enqueue("c");
  queue.enqueue("d");

  console.log(`The first item that will leave is: ${queue.front()}`);
  queue.print();
}

function testSize() {
  const queue = new Queue();

  console.log(`Size before adding items: ${queue.size()}`);

  queue.enqueue("a");
  queue.enqueue("b");
  queue.enqueue("c");
  queue.enqueue("d");

  console.log(`Size after adding 4 items: ${queue.size()}`);
}

function testIsEmpty() {
  const queue1 = new Queue();
  const queue2 = new Queue();

  queue2.enqueue(4);

  if (queue1.isEmpty()) console.log("queue1 is empty");

  if (!queue2.isEmpty()) console.log("queue2 is not empty");
}

// testEnqueue();
// testPrint();
// testDequeue();
// testFront();
// testSize();
// testIsEmpty();
