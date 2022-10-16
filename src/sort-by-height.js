const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = arr.map(element => {
    if(element === -1)
      return -1;
    else
      return 0;
  })
  let numbers = arr.filter(element => {
    if(element !== -1)
      return element;
  }).sort((a, b) => a-b);
  
  return result.map(element => {
    if(element === -1)
      return -1;
    else
      return numbers.shift();
  })
}

module.exports = {
  sortByHeight
};
