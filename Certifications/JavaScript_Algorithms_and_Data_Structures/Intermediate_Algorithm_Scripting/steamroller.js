function steamrollArray(arr) {
  let flatArr = [];

  const flatten = (item) => {
    if (!Array.isArray(item)) flatArr.push(item);
    else {
      for (let i in item) {
        flatten(item[i]);
      }
    }
  };

  arr.forEach(flatten);
  return flatArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
