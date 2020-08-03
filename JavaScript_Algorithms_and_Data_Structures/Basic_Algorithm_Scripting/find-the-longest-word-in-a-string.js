function findLongestWordLength(str) {
  let strArray = str.split(" ");
  let longest = strArray[0];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].length > longest.length) {
      longest = strArray[i];
    }
  }
  return longest.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // 6
