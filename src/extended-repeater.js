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
  let add = [];
  let arr = [];
  str = String(str);
  if (options["addition"] !== undefined) {
    options.addition = String(options.addition);
  }
  if (options["repeatTimes"] == undefined) {
    options["repeatTimes"] = 1;
  }
  if (options["additionRepeatTimes"] == undefined) {
    options["additionRepeatTimes"] = 1;
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    add = [];
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      add.push(options.addition);
    }
    if (options["additionSeparator"] !== undefined) {
      arr.push(str + add.join(options.additionSeparator));
    } else {
      arr.push(str + add.join('|'));
    }
  }
  if (options["separator"] !== undefined) {
    return arr.join(options.separator);
  } else {
    return arr.join('+');
  }
}

module.exports = {
  repeater
};
