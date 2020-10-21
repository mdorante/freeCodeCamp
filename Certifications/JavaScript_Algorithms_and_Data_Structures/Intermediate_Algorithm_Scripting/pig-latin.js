function translatePigLatin(str) {
  const vowels = /[aeiou]/;
  const match = str.match(vowels);

  return match // test if the word has vowels
    ? match.index === 0
      ? `${str}way` // if the word begins with a vowel, simply add "way" at the end of the string
      : `${str.substring(match.index)}${str.substring(0, match.index)}ay` // if it has vowels somewhere in the middle, move the first cluster of consonants to the end and add "ay"
    : `${str}ay`; // if the word has no vowels, simply add "ay" at the end
}

console.log(translatePigLatin("california")); // aliforniacay
console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("algorithm")); // algorithmway
console.log(translatePigLatin("eight")); // eightway
console.log(translatePigLatin("schwartz")); // artzschway
console.log(translatePigLatin("rhythm")); // rhythmay
