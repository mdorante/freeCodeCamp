function smallestCommons(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let scm = 0;
  let multiple = sortedArr[1];

  while (scm === 0) {
    for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
      if (multiple % i !== 0) break;

      // number is divisible by all numbers in the range, this is the one
      if (i == sortedArr[1]) scm = multiple;
    }

    multiple += sortedArr[1];
  }
  return scm;
}

console.log(smallestCommons([1, 5]));
