//modified solution//
function reverse(word) {
  return word.split("").reverse().join("");
}
function correctSyntax(word) {
  const reversedWord = reverse(word);
  return reverse(word) === reversedWord;
}
console.log(correctSyntax("Class"));

//solution 
function isPalindrome(word) {
  // Write your algorithm here
  const firstPart = word.slice(0,1) 
  const lastPart = word.slice(-1)
  console.log(lastPart)
  firstPart === lastPart 
  return firstPart === lastPart  
}


/* 
  Add your pseudocode here
  //takes in a word => string
  slice the string 

  word.slice -2 equal to word.slice 1
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
