const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  if(str === "")
    return "";
  let count = 1;
  for (let index = 0; index < str.length-1; index++) {
    if(str[index] !== str[index+1]){
      if(count === 1){
        result += str[index];
      }
      else{
        result += count + str[index]
      }
      count = 1;
    }
    else{
      count++;
    }
  }
  if(count !== 1)
    result += count.toString() + str[str.length-1]
  else
  result += str[str.length-1]
  return result;
}

module.exports = {
  encodeLine
};
