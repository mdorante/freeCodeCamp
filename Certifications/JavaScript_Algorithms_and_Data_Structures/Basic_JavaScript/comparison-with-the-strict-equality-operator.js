// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

/*
With the strict equality operator: ===
JS will NOT convert data types
3 ===  3   // true
3 === '3'  // false
 */
