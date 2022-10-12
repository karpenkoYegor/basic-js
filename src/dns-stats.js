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
function getDNS(domain){
  let collection = domain.split(".");
  collection[collection.length-1] = "."+collection[collection.length-1];
  for (let index = collection.length-2; index >= 0; index--) {
    collection[index] = collection[index+1]+"."+collection[index];
    console.debug(collection[index]);
  }
  return collection;
}

function getDNSStats(domains) {
  result = {}
  for (let index = 0; index < domains.length; index++) {
    const dns = getDNS(domains[index]);
    console.debug(dns);
    for (const item of dns) {
      if(item in result){
        result[item]++;
      }
      else{
        result[item] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
