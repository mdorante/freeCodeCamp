function addTogether(...args) {
  if (args.some((x) => typeof x !== "number")) return;

  if (args.length === 2) return args.reduce((acc, curr) => acc + curr);
  else return (x) => (typeof x === "number" ? x + args[0] : undefined);
}

console.log(addTogether(2, 3)); // returns 5
console.log(addTogether(2)(7)); // returns 9
console.log(addTogether("3", 10)); // returns undefined
console.log(addTogether(2)([3])); // returns undefined
