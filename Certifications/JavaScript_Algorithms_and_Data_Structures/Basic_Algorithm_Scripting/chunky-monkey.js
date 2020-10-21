function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    // generate indices we need in order to correctly slice arr, varies depending on size
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); // [ [ 0, 1, 2 ], [ 3, 4, 5 ], [ 6 ] ]
