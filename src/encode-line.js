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
  let result = '';
  if (str === '') {
    return '';
  }
  let count = 1;
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      } else {
        if (count === 1) {
          result += str[i];
        } else {
          result += count + str[i];
        }
        i += count;
        count = 1;
      }
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
