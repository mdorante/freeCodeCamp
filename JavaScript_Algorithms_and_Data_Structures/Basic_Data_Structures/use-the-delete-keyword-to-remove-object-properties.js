let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
let toBeDeleted = ['oranges', 'plums', 'strawberries'];
for (let i = 0; i < toBeDeleted.length; i++) {
  delete foods[toBeDeleted[i]];
}
// Only change code above this line

console.log(foods);
