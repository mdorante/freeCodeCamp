function uniteUnique(arr) {
  const flatArr = [...arguments].flat();
  let newArr = [];

  for (let i = 0; i < flatArr.length; i++) {
    if (!newArr.includes(flatArr[i])) {
      newArr.push(flatArr[i]);
    }
  }
  return newArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
