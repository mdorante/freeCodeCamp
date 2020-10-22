import { mySet } from "./set.js";

function testAdd() {
  const set = new mySet();

  if (set.add(5)) console.log("Added element 5 to the set successfully");
  else "Add not working";
}

function testRemove() {
  const set = new mySet();

  if (set.add(5)) console.log("Added element 5 to the set successfully");

  if (set.remove(5)) console.log("Removed element 5 successfully");

  if (!set.remove(10))
    console.log(
      "Tried to remove element 10 and failed properly because the set does not have this element"
    );
}

function testHas() {
  const set = new mySet();

  if (set.add(5)) console.log("Added element 5 to the set successfully");

  if (set.has(5)) console.log("Set has element 5.");

  if (set.has(true))
    console.log(
      "If your'e seeing this, the has() method does not work properly"
    );
}

function testSize() {
  const set = new mySet();

  console.log(`Size before adding values: ${set.size()}`);

  set.add(1);
  set.add(2);
  set.add(3);

  console.log(`Size after adding 3 values: ${set.size()}`);
}

function testValues() {
  const set = new mySet();

  console.log("Before:");
  console.log(set.values());

  set.add(1);
  set.add(2);
  set.add(3);

  console.log("After:");
  console.log(set.values());
}

function testSubset() {
  const setA = new mySet();
  const setB = new mySet();
  const setC = new mySet();

  setA.add(1);
  setA.add(12);
  setA.add("hello");
  setA.add(false);
  setA.add(false);

  setB.add("hello");
  setB.add(true);
  setB.add(12);
  setB.add(1);
  setB.add(false);
  setB.add(["hi", false, 196]);

  setC.add(1);
  setC.add(12);
  setC.add("hello");
  setC.add(false);
  setC.add(false);

  console.log("Set A:");
  console.log(setA.values());

  console.log("\nSet B:");
  console.log(setB.values());

  console.log("\nSet C:");
  console.log(setC.values());

  if (setA.subset(setB)) console.log("\nA is a subset of B");

  if (!setB.subset(setA)) console.log("B is NOT a subset of C");

  if (setA.subset(setC)) console.log("A is a subset of C");
}

function testUnion() {
  const setA = new mySet();
  const setB = new mySet();

  setA.add(1);
  setA.add(12);
  setA.add("hello");
  setA.add(false);
  setA.add(false);

  setB.add("hello");
  setB.add(true);
  setB.add(12);
  setB.add(1);
  setB.add(false);
  setB.add(["hi", false, 196]);

  const unionSet = setA.union(setB);

  console.log("Set A:");
  console.log(setA.values());

  console.log("\nSet B:");
  console.log(setB.values());

  console.log("\nUnion Set: ");
  console.log(unionSet.values());
}

function testDiff() {
  const setA = new mySet();
  const setB = new mySet();

  setA.add(1);
  setA.add(12);
  setA.add("hello");
  setA.add(false);
  setA.add(false);

  setB.add("hello");
  setB.add(true);
  setB.add(12);
  setB.add(1);
  setB.add(false);
  setB.add(["hi", false, 196]);

  const diffSet = setB.difference(setA);

  console.log("Set A:");
  console.log(setA.values());

  console.log("\nSet B:");
  console.log(setB.values());

  console.log("\nDifference Set: ");
  console.log(diffSet.values());
}

function testIntersect() {
  const setA = new mySet();
  const setB = new mySet();

  setA.add(1);
  setA.add(12);
  setA.add("hello");
  setA.add(false);
  setA.add(false);

  setB.add("hello");
  setB.add(true);
  setB.add(12);
  setB.add(1);
  setB.add(false);
  setB.add(["hi", false, 196]);

  const intersectSet = setA.intersect(setB);

  console.log("Set A:");
  console.log(setA.values());

  console.log("\nSet B:");
  console.log(setB.values());

  console.log("\nIntersection Set: ");
  console.log(intersectSet.values());
}

// testAdd();
// testRemove();
// testHas();
// testSize();
// testValues();

// testSubset();

// testUnion();
// testDiff();
// testIntersect();
