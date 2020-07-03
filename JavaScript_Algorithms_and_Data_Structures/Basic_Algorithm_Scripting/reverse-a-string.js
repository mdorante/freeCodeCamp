function reverseString(str) {
  let strArray = Array.from(str);
  strArray.reverse();
  let reverseStr = strArray.join("");
  return reverseStr;
}

console.log(reverseString("hello")); // olleh
