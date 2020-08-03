function checkPositive(arr) {
  // Only change code below this line

  // returns true if at least one element passes the test
  return arr.some(num => num > 0); 

  // Only change code above this line
}
console.log(checkPositive([1, 2, 3, -4, 5])); // true
