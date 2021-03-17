const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {


  if (!Array.isArray(arr)){
    throw err;
  }

  const next = "--discard-next";
  const prev = "--discard-prev";
  const dnext = "--double-next";
  const dprev = "--double-prev";

  const newArr = [];
  const copyArr = arr.map(x => x);

  for(let i = 0; i < copyArr.length; i++){
    
    if(copyArr[i - 1] === next){
      continue;
    }
     if (copyArr[i - 1] === dnext){
      newArr.push(copyArr[i]);
    } 
    
    if(copyArr[i + 1] === prev){
      continue;
    }
    
    if(copyArr[i + 1] === dprev){
        newArr.push(copyArr[i]);
    }
    
    if(copyArr[i] !== next && copyArr[i] !== prev && copyArr[i] !== dnext && copyArr[i] !== dprev){
    newArr.push(copyArr[i]);
    }

  }
  
  return newArr;
};
