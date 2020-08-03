let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})();

/**
 Creates a funModule object that contains the two methods as properties, you can then add those methods to an object instance:

let duck = new Bird();
funModule.isCuteMixin(duck);
duck.isCute(); // true
 */
