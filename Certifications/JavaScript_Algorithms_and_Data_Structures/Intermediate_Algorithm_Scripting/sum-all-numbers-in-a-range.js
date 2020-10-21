function sumAll(arr) {
  const sorted = arr.sort((a, b) => a - b);

  // Create a recursive function that makes a range from a given start and end value
  const range = (start, end) =>
    start === end ? [start] : [...range(start, end - 1), end];

  // Spread the contents of sorted into range() and return the sum of all elements
  return range(...sorted).reduce((sum, currentValue) => sum + currentValue);
}

console.log(sumAll([4, 1])); // 10
