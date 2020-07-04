function bouncer(arr) {
  return arr.filter(x => Boolean(x) === true);
}

bouncer([7, "ate", "", false, 9]); // [ 7, 'ate', 9 ]
