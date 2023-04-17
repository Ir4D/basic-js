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
  let newArr = [];
  arr.forEach(item => {
    if (item !== -1) {
      newArr.push(item);
    }
  })
  function compare(a, b) {
    return a - b;
  }
  newArr.sort(compare);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      newArr.splice(i, 0, -1);
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
