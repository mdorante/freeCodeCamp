// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {
  return title
    .trim()
    .toLowerCase()
    .split(/\W/)
    .filter(word => word !== "")
    .join("-");

}
// Only change code above this line
console.log(urlSlug(globalTitle)); // winter-is-coming