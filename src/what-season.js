const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(getSeasonFromDate) {
  //throw new CustomError('Not implemented');
  let monthFromDate = null
  // remove line with error and write your code here
  try {
    monthFromDate = getSeasonFromDate.getUTCMonth()
  } catch (error) {
    //return 'Unable to determine the time of year!'
    throw new CustomError('THROWN');
  }
  
  console.log(getSeasonFromDate.length)

  if (monthFromDate === 11 || (monthFromDate >= 0 && monthFromDate <= 1)) return 'winter'
  else if (monthFromDate >= 2 && monthFromDate <= 4) return 'spring'
  else if (monthFromDate >= 5 && monthFromDate <= 7) return 'summer'
  else if (monthFromDate >= 8) return 'autumn'

  if (getSeasonFromDate.__proto__.constructor.name != 'Date') throw new CustomError('THROWN');
};
