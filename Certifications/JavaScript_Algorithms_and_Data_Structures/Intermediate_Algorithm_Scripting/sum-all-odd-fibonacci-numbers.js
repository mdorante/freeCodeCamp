function sumFibs(num) {
  let a = 1,
    b = 0,
    temp;
  let fibArr = [];

  for (let i = num; i >= 0; i--) {
    temp = a;
    a = a + b;
    b = temp;
    fibArr.push(b);
  }
  const unevenFibs = fibArr
    .filter((x) => x % 2 != 0 && x <= num)
    .reduce((acc, curr) => acc + curr);

  return unevenFibs;
}

console.log(sumFibs(10));
