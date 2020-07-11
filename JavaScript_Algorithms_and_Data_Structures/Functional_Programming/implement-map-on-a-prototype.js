// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let newArray = [];
  // Only change code below this line
  this.forEach(element => newArray.push(callback(element)));
  // Only change code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s) // [ 46, 130, 196, 10 ]