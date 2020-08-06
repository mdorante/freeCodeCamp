function myReplace(str, before, after) {
  const upperCase = /^[A-Z]/;
  const startsWithUpperCase = before.match(upperCase);

  if (startsWithUpperCase) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
); // A quick brown fox leaped over the lazy dog
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // He is Sitting on the couch
console.log(myReplace("I think we should look up there", "up", "Down")); // I think we should look down there
