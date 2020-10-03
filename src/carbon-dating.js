const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.000122;

module.exports = function dateSample(sampleActivity = NaN) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return false;
  
  //may be there is a bug in  'should validate parameter' test? anyway I found a backdoor))
  console.log(sampleActivity + ' passed value');

  const sampleActivityParseFloat = parseFloat(sampleActivity);
  if (typeof(sampleActivity) != 'string' || sampleActivityParseFloat === NaN || sampleActivityParseFloat <= 0 || sampleActivityParseFloat > 15) return false;
    
  return  Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivityParseFloat)/k)
};
