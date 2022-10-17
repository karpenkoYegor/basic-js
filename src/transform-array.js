const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === "--discard-next"){
      i += 2;
    }
    else if(arr[i] === "--discard-prev"){
      if(i !== 0)
        result.pop();
    }
    else if(arr[i] === "--double-next"){
      result.push(arr[i+1]);
    }
    else if(arr[i] === "--double-prev"){
      result.push(arr[i-1]);
    }
    else{
      if(arr[i] !== "--discard-prev")
        result.push(arr[i]);
    }
  }
  if(result[0] === undefined)
    result.shift();
  if(result[result.length-1] === undefined)
    result.pop();
  return result;
}

module.exports = {
  transform
};
