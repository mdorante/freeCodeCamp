function whatIsInAName(collection, source) {
  // Only change code below this line

  return collection.filter((object) =>
    Object.keys(source).every(
      (key) => object.hasOwnProperty(key) && object[key] == source[key]
    )
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
); // [ { first: 'Tybalt', last: 'Capulet' } ]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
); // [ { apple: 1, bat: 2, cookie: 2 } ]
