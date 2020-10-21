function getIndexToIns(arr, num) {
  let index = arr.sort((a, b) => a - b).findIndex((x) => x >= num);
  // NOTE: (a, b) => a - b sorts array in ascending order
  if (index !== -1) {
    return index;
  } else {
    return arr.length;
  }
}

getIndexToIns([2, 5, 10], 15); // 3
