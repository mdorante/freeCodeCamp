/*
	We're going to implement our own Set class (without using the ES6 built-in Set object) 
	A Set is similar to an Array, except it doesn't accept duplicate values and the values are not stored in a fixed order
*/

export class mySet {
  constructor() {
    // this is the internal array that will hold the values of the Set
    this.collection = [];
  }

  has(value) {
    return this.collection.includes(value);
  }

  // returns the internal array that holds the Set values (this is basically the set)
  values() {
    return this.collection;
  }

  add(item) {
    if (!this.has(item)) {
      this.collection.push(item);
      return true;
    } else return false;
  }

  remove(item) {
    if (this.has(item)) {
      const index = this.collection.indexOf(item);
      this.collection.splice(index, 1);
      return true;
    } else return false;
  }

  size() {
    return this.collection.length;
  }

  // combines two sets, leaving out duplicates in the new combined set (obviously)
  union(otherSet) {
    const unionSet = new mySet();
    const thisSet = this.values();
    const secondSet = otherSet.values();

    // add the original set values
    thisSet.forEach((element) => unionSet.add(element));

    // add the second set values
    secondSet.forEach((element) => unionSet.add(element));

    return unionSet;
  }

  // creates a new set containing the items that are present in both sets
  intersect(otherSet) {
    const intersectionSet = new mySet();
    const thisSet = this.values();

    thisSet.forEach((element) => {
      if (otherSet.has(element)) intersectionSet.add(element);
    });

    return intersectionSet;
  }

  // creates a new set containg only the items that are NOT in BOTH sets
  difference(otherSet) {
    const diffSet = new mySet();
    const thisSet = this.values();

    thisSet.forEach((element) => {
      if (!otherSet.has(element)) diffSet.add(element);
    });

    return diffSet;
  }

  // tests if this set is a subset of another set
  subset(otherSet) {
    const thisSet = this.values();

    // will return true if every item in thisSet is present in the other set
    return thisSet.every((element) => otherSet.has(element));
  }
}
