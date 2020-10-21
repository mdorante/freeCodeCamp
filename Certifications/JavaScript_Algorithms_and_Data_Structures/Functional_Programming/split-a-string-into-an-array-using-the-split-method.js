function splitify(str) {
  // Only change code below this line
  return str.split(/\W/); // split by anything that is not a number or letter

  // Only change code above this line
}
console.log(splitify("Hello World,I-am code")); // [ 'Hello', 'World', 'I', 'am', 'code' ]
