function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

sentence =
  "This is the sentence that im am going to be testing this function with.";
let longestWord = findLongestWord(sentence);
console.log(longestWord);
