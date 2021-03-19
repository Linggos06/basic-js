const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array, depth = 1) {


    if (!Array.isArray(array)) throw new Exception('not an array');

    let res = depth;
    for (let i = 0; i < array.length; ++i) {
      if (Array.isArray(array[i])) {
        let subDepth = this.calculateDepth(array[i], depth + 1);
        if (subDepth > res) {
          res = subDepth;
        }
      }
    }
    return res;

  }

};