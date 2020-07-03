function repeatStringNumTimes(str, num) {
  if (num > 0) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
      repeated += str;
    }
    return repeated;
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3); // abcabcabc
