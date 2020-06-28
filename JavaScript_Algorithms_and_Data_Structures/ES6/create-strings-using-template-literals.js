const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // Only change code below this line
  const resultDisplayArray = [];
  for (let i=0;i < result.failure.length; i++) {
    const line = `<li class="text-warning">${result.failure[i]}</li>`
    resultDisplayArray.push(line);
  }
  // Only change code above this line

  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);