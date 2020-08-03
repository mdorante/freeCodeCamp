// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

/*
JS will convert data types and then compare as follows:
1   ==  1   // true
1   ==  2   // false
1   == '1'  // true
"3" ==  3   // true
*/
