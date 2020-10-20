function add(x) {
  // Only change code below this line
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
  // Only change code above this line
}
console.log(add(10)(20)(30)); // 60

/* The whole add() function is the curried equivalent of:

function add(x, y, z) {
  return x + y + z;
}

It can also be curried like this using ES6:
const add = x => y => z => x + y + z;
*/

const plus = (x) => (y) => (z) => x + y + z;
console.log(plus(1)(2)(3)); // 6
