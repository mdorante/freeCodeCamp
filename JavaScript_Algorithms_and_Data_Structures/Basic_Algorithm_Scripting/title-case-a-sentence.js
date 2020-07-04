function titleCase(str) {
  let strArray = str.split(" ");
  let upperArray = [];
  for (let i = 0; i < strArray.length; i++) {
    upperArray.push(strArray[i][0].toUpperCase() + strArray[i].slice(1).toLowerCase());
  }
  return upperArray.join(" ");
}

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
