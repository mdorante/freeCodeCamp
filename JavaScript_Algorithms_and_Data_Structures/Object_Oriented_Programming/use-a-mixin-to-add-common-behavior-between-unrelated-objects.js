let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
let glideMixin = function (obj) {
  obj.glide = () => console.log("Gliding!!!");
};
// let glideMixin = (obj) => obj.glide = () => console.log('Gliding!!!') // this works too, using arrow functions

glideMixin(bird);
glideMixin(boat);
bird.glide(); // Gliding!!!
boat.glide(); // Gliding!!!
