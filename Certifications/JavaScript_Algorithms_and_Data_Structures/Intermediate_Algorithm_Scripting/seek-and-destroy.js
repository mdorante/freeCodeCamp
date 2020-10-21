function destroyer(arr) {
  // create an array from the arguments object and return the items in arr that are not present in it
  return arr.filter((num) => Array.from(arguments).indexOf(num) === -1);
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
