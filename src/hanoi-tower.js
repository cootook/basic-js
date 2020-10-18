const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turnsNumber = (2 ** disksNumber)  - 1
  let timeNeed = Math.floor((turnsNumber / turnsSpeed) * 3600)
  return {turns: turnsNumber, seconds: timeNeed}
};
