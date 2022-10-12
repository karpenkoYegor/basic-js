const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  max = 0;
  n = n.toString();
  for (let i = n.length-1; i >= 0; i--) {
    if(parseInt(n.slice(0, i)+n.slice(i+1))>max){
      max = parseInt(n.slice(0, i)+n.slice(i+1))
    }
  }
  return max;
}

module.exports = {
  deleteDigit
};
