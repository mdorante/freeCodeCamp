function confirmEnding(str, target) {
  return (str.slice(-target.length) === target) ? true : false;
}

confirmEnding("Bastian", "n"); // true