function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}

let rooster = new Bird();
rooster.getWeight(); // 15
