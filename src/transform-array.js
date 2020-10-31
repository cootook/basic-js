const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr = []) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (arr.length = 0) return []
  try {
    if (!Array.isArray(arr)) throw new CustomError('Error')
  } catch (error) {
    throw new CustomError(error)
  }
  
  let resArr = []

  try {
    for (let i = 0; i < array.length; i++) {
      console.log(`-1 --${arr[i-1]}--${arr[i]}--${arr[i+1]}--   +1 `)
      const element = arr[i];
      if (element === `--discard-next`) {
        //resArr.push(element)
        i++}
      else if (element === `--discard-prev`)  resArr.pop()
      else if (element === `--double-next`) resArr.push(arr[i+1])
      else if (element === `--double-prev`) resArr.push(arr[i-1])
      else resArr.push(element)
    }
    return resArr
  } catch (error) {
    throw new CustomError(error)
  }

  
}