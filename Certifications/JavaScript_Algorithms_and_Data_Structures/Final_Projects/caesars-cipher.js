function rot13(str) {
  return str.replace(/[a-z]/gi, (letter) => {
    let utf8 = letter.charCodeAt(0);

    return utf8 <= 77
      ? String.fromCharCode(utf8 + 13)
      : String.fromCharCode(utf8 - 13);
  });
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
