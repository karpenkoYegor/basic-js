const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getLetters(word){
  let letters = {}
  for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    if(letter in letters){
      letters[letter]++;
    }
    if(!(letter in letters)){
      letters[letter] = 1;
    }
    
  }
  return letters;
}

function getCommonCharacterCount(s1, s2) {
  let firstWordLetters = getLetters(s1);
  let secondWordLetters = getLetters(s2);
  let result = 0;
  for (const key in firstWordLetters) {
    if(key in secondWordLetters)
      result += (firstWordLetters[key] < secondWordLetters[key]) ? firstWordLetters[key] : secondWordLetters[key];
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
