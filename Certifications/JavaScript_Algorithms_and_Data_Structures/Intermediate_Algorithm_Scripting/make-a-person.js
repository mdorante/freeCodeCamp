var Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let fullName = firstAndLast;

  this.getFullName = function () {
    return fullName;
  };

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };

  this.setFirstName = function (first) {
    const tmpName = fullName.split(" ");
    tmpName[0] = first;
    fullName = tmpName.join(" ");
  };

  this.setLastName = function (last) {
    const tmpName = fullName.split(" ");
    tmpName[1] = last;
    fullName = tmpName.join(" ");
  };

  return fullName;
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
console.log(bob.getFirstName());
console.log(bob.getLastName());

bob.setFirstName("Dude");
console.log(bob.getFullName());

bob.setLastName("Dudeson");
console.log(bob.getFullName());

bob.setFullName("Itachi Uchiha");
console.log(bob.getFullName());
