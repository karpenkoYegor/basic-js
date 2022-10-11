const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  console.log(backyard)
  let number = 0;
  for (const row of backyard) {
    for (let index = 0; index < row.length; index++) {
      if (row[index] === "^^") {
        number++;
      }
    }
  }
  return number;
}

module.exports = {
  countCats
};
