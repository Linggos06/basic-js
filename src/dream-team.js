const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(Array.isArray(arr)){
    return arr.map(val => typeof val === "string" ? val.trim().charAt(0).toUpperCase() : null)
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .join('');
  }else {
    return false;
  }
};

