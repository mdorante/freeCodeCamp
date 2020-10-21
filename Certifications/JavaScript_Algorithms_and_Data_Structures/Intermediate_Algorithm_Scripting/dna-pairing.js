function pairElement(str) {
  let dnaArray = [];
  let strArray = str.split("");

  const pairMatcher = (array) =>
    array.forEach((element) => {
      switch (element) {
        case "A":
          dnaArray.push(["A", "T"]);
          break;
        case "T":
          dnaArray.push(["T", "A"]);
          break;
        case "C":
          dnaArray.push(["C", "G"]);
          break;
        case "G":
          dnaArray.push(["G", "C"]);
          break;
      }
    });

  pairMatcher(strArray);

  return dnaArray;
}

console.log(pairElement("GCG")); // [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
console.log(
  pairElement("TTGAG")
); /*
[
  [ 'T', 'A' ],
  [ 'T', 'A' ],
  [ 'G', 'C' ],
  [ 'A', 'T' ],
  [ 'G', 'C' ]
]
*/
