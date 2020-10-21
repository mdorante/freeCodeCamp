// We're going to create a Stack using arrays
// We're going to find words that are palindromes (spelled the same forwards and backwards)

// this is going to be the stack!
let letters = [];

let word = "racecar";

let reverseWord = "";

// push each letter from word into the stack
word.split("").forEach((x) => letters.push(x));

// pop each item off the end of the stack into reverseWord
for (let i in word) {
  reverseWord += letters.pop();
}

console.log(word, reverseWord);

if (reverseWord === word) console.log(`${word} is a palindrome`);
else console.log(`${word} is NOT a palindrome`);
