const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let addition = [];
  if(!("separator" in options)){
    options["separator"] = "+";
  }
  if(!("additionSeparator" in options)){
    options["additionSeparator"] = "|";
  }
  if(!("repeatTimes" in options)){
    options["repeatTimes"] = 1;
  }
  if(!("additionRepeatTimes" in options)){
    options["additionRepeatTimes"] = 1;
  }
  if(options["addition"] === null){
    options["addition"] = "null";
  }
  for (let index = 0; index < options["additionRepeatTimes"]; index++) {
    addition.push(options["addition"]);
  }
  addition = addition.join(options["additionSeparator"]);
  addition = str+addition;
  for (let index = 0; index < options["repeatTimes"]; index++) {
    result.push(addition);
  }
  return result.join(options["separator"]);
}

module.exports = {
  repeater
};
