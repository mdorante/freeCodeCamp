function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Akamaru", "White-brownish");
console.log(terrier.name); // Akamaru
console.log(terrier.color); // White-brownish
console.log(terrier.numLegs); // 4
