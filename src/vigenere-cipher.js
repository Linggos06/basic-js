const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine){
    this.machine = machine;
  }
  
  
  encrypt(string, key) {
    if(!string || !key){
      throw new Error();
    }

    let output = "";
  
    function isUppercase(c) {
      return 65 <= c && c <= 90;  
    }
  
    function isLowercase(c) {
      return 97 <= c && c <= 122; 
    }

    function isLetter(c) {
      return isUppercase(c) || isLowercase(c);
    }

      let result = [];
      for (let i = 0; i < key.length; i++) {
        const c = key.charCodeAt(i);
        if (isLetter(c))
          result.push((c - 65) % 32);
      }
     
   
    for (let i = 0, j = 0; i < string.length; i++) {
        const c = string.charCodeAt(i);
        if (isUppercase(c)) {
            output += String.fromCharCode((c - 65 + result[j % result.length]) % 26 + 65);
            j++;
        } else if (isLowercase(c)) {
            output += String.fromCharCode((c - 97 + result[j % result.length]) % 26 + 97);
            j++;
        } else {
            output += string.charAt(i);
        }
    }

    if(this.machine === false && this.machine !== ''){
      return output.toUpperCase().split('').reverse().join('');
    }
    return output.toUpperCase();
    
  }    
  decrypt(encryptedMessage, key) {
     if(!encryptedMessage || !key){
       throw new Error();
     }
     
     let output = "";
  
    function isUppercase(c) {
      return 65 <= c && c <= 90;  
    }
  
    function isLowercase(c) {
      return 97 <= c && c <= 122; 
    }

    function isLetter(c) {
      return isUppercase(c) || isLowercase(c);
    }

      let result = [];
      for (let i = 0; i < key.length; i++) {
        const c = key.charCodeAt(i);
        if (isLetter(c))
          result.push((c - 65) % 32);
      }


      for (var i = 0; i < result.length; i++){
				result[i] = (26 - result[i]) % 26;
      }
   
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
        const c = encryptedMessage.charCodeAt(i);
        if (isUppercase(c)) {
            output += String.fromCharCode((c - 65 + result[j % result.length]) % 26 + 65);
            j++;
        } else if (isLowercase(c)) {
            output += String.fromCharCode((c - 97 + result[j % result.length]) % 26 + 97);
            j++;
        } else {
            output += encryptedMessage.charAt(i);
        }
    }



     if(this.machine === false && this.machine !== ''){
      return output.toUpperCase().split('').reverse().join('');
    }
    return output.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
