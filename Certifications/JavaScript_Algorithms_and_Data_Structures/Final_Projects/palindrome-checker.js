function palindrome(str) {
  const letters = str
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, "")
    .split("");

  const reverseLetters = [];

  letters.forEach((element) => reverseLetters.unshift(element));

  return letters.join("") === reverseLetters.join("");
}

console.log(palindrome("_eye"));
