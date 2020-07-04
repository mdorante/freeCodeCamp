function mutation(arr) {
  let lowerArr = [];
  arr.forEach(x => lowerArr.push(Array.from(x.toLowerCase()))); // turn each element in arr into a lowercase array and push all of them to lowerArr
  return lowerArr[1].every(char => lowerArr[0].indexOf(char) !== -1); // returns true if every element in the second array of lowerArr is present in the first array
}

mutation(["hello", "Hello"]); // true