const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result;
  function getTheFirstLetter(m) {
    if (typeof (m) != 'string') return ''
    return m.trim()[0].toUpperCase()
  }
  try {
    result = members.map(getTheFirstLetter).sort().join('');
    return result;
  } catch (error) {
    return false;
  }
};
