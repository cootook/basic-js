const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let countCatsResult = 0;
  for (let i = 0; i < matrix.length; i++) {
    
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];
      if (element === '^^') countCatsResult++
    }
  }
  return countCatsResult
};
