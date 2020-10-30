function truthCheck(collection, pre) {
  // if every key pre has a truty value, return true
  // if at least one is falsy, return false
  return collection.every((x) => x[pre]);
}

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex"
  )
);
