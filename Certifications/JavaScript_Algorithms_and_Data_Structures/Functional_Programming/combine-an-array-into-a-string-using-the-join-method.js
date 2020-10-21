function sentensify(str) {
  // Only change code below this line
  let splitted = str.split(/\W/);
  return splitted.join(" ");

  // Only change code above this line
}
console.log(sentensify("May-the-force-be-with-you")); // May the force be with you
