const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(data) {
 
  if(typeof data === "string" && Number(data) > 0) {
    const res =  Math.ceil(Math.log(MODERN_ACTIVITY / Number(data)) / (0.693 /HALF_LIFE_PERIOD ));
    if(res < 0) {
      return false;
    }else{
      return res;
    }
   }
   return false;
};
