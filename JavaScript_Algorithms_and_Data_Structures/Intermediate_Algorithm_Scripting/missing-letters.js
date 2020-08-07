function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* in UTF-16 the alphabet is the range of numbers 97-122 (in order)
     so naturally, if when looping through the string, 
     the difference between the following letter's UTF-16 code and the current one is greater than 1, then you skipped a letter */
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

console.log(fearNotLetter("abce")); // d
console.log(fearNotLetter("abcdefghjklmno")); // i
