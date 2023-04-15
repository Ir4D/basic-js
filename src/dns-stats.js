const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  domains.forEach((item) => {
    let element = item.split('.');
    let newElement = '';
    for (let i = element.length - 1; i >= 0; i--) {
      newElement += '.' + element[i];
      arr.push(newElement);
    }
  })

  const counts = {};
  arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  return counts;
}

module.exports = {
  getDNSStats
};
