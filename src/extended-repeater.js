const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes, separator='+', addition, additionRepeatTimes, additionSeparator='|'}) {
  
  let newStr = str;

  if (typeof newStr !== "string"){
    newStr = String(newStr);
  } 
  
  if(addition && typeof addition !== "string"){
    addition = String(addition);
  }
    
      
    if(Number.isInteger(repeatTimes) && Number.isInteger(additionRepeatTimes)){
  for(let i = 0; i < additionRepeatTimes; i++){
    newStr = newStr.concat(addition);
    if(i < additionRepeatTimes - 1){
      newStr = newStr.concat(additionSeparator);
    }
  }
  }else if(addition){
  newStr = newStr.concat(addition);
   }
    

  const res = Array(repeatTimes).fill(newStr).join(`${separator}`);
  return res;

};

  