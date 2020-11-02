function telephoneCheck(str) {
  const regex = /^(1 |1)*(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/;
  return regex.test(str);
}

console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 (555) 555-5555"));
