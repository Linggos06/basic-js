const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(input) {
  
  if(!input instanceof Date || !input){
    return 'Unable to determine the time of year!';
  }

  const day = input.getDate();
  const month = input.getMonth();
  const year = input.getFullYear();
  const daysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 4 == 0) {
    daysPerMonth[1] = 29;
}

if (day > daysPerMonth[month]) {
  return false;
}
    
   const monthh = input.getMonth();
   let season = '';
    
   switch(monthh) {
      case 11:
      case 0:
      case 1:
          season = 'winter';
      break;
      case 2:
      case 3:
      case 4:
          season = 'spring';
      break;
      case 5:
      case 6:
      case 7:
          season = 'summer';
      break;
      case 8:
      case 9: 
      case 10:
          season = 'fall';
      break;
    }
    return season;

   
};
