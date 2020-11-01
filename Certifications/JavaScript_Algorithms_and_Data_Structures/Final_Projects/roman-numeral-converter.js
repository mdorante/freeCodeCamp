const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  let converted = "";

  // iterate over numerals keys
  for (let roman in numerals) {
    // destructure the number starting from the greatest roman equivalent
    while (num >= numerals[roman]) {
      num -= numerals[roman];
      converted += roman;
    }
  }
  return converted;
}

console.log(convertToRoman(36));
