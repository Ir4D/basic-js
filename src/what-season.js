const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error("Invalid date!");
  }
  if (date.hasOwnProperty('toString')) {
    throw new Error("Invalid date!");
  }
  if (date instanceof Date && !isNaN(date)) {
    const seasons = {
      'spring': [2, 3, 4], 
      'summer': [5, 6, 7], 
      'autumn': [8, 9, 10], 
      'winter': [0, 1, 11]
    };
    let month = date.getMonth();
    let result;
    for (let key in seasons) {
      for (let i = 0; i < 3; i++) {
        if (seasons[key][i] === month) {
          result = key;
        }
      }
    }
    return result;
  } else {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
