const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {

  const merged = [].concat(...array);
  return merged.reduce((acc, val) => {
         if(val === '^^'){
          return acc += 1;
         }
         return acc;
  }, 0);
  
};
