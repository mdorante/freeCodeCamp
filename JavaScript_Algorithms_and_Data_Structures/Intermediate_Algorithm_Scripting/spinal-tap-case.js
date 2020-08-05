function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // separates camelCase by words
    .replace(/[\W_]/g, " ") // replaces any non-alphanumeric character with a space
    .split(" ")
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); // this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); // this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); // the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); // teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); // all-the-small-things
