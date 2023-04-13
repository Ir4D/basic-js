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
  let str = String(n);
  let arr = [];
  for (let i = 1; i <= str.length; i++) {
    let b = str.substr(0, i - 1) + str.substr(i, str.length);
    arr.push(Number(b));
  }
  return Math.max.apply(null, arr);
}

module.exports = {
  deleteDigit
};
