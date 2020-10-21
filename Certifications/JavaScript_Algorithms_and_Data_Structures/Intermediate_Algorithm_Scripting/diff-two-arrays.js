function diffArray(arr1, arr2) {
  // get elements that are present in arr1 and absent in arr2
  const diff1 = arr1.filter((element) => !arr2.includes(element));

  // get elements that are present in arr2 and absent in arr1
  const diff2 = arr2.filter((element) => !arr1.includes(element));

  // return an array containing all elements that are only present in one of the two arrays
  return diff1.concat(diff2);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [ 4 ]
