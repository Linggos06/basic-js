const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
 
  calculateDepth(array, depth=1) {
    
    for (const subArr of array) {
      if(Array.isArray(subArr)){
        return depth + this.calculateDepth(subArr);
        }
    }
      return depth;
  }
  
  
};