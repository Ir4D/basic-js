const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
  let arr = n.split('-');
  let flag = 0;
  arr.forEach(element => {
    if (numbers.includes(element[0]) || letters.includes(element[0])) {
      if (numbers.includes(element[1]) || letters.includes(element[1])) {
        flag++;
      }
    } else {
      return flag--;
    }
  });

  if (flag < 6) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  isMAC48Address
};
