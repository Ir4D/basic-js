const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    let depth = 0;
    if (Array.isArray(arr)) {
      result = 1;
      if (arr.length === 0) {
        result = 1;
      } else {
        arr.forEach(element => {
          if (Array.isArray(element)) {
            let depth2 = this.calculateDepth(element);
            if (depth2 > depth) {
              depth = depth2;
            }
          }
        });
      }
      result = result + depth;
      return result;
    }
  }
}

module.exports = {
  DepthCalculator
};
