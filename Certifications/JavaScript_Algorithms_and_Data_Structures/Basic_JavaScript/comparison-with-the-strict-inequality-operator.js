// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

/*
JS will NOT convert data types:
3 !==  3   // false
3 !== '3'  // true
4 !==  3   // true
*/
