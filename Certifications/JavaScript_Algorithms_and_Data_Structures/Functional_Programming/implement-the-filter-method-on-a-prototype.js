// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  // Only change code below this line
  let newArray = [];
  this.forEach((element) => (callback(element) ? newArray.push(element) : {})); // if the callback function returns true for the element of the array, push the element to newArray, if not, do nothing
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});

console.log(new_s); // [ 23, 65, 5 ]
