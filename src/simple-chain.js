const CustomError = require("../extensions/custom-error");

const chainMaker = {
  string: [],
  getLength() {
    return this.string.length;
  },
  addLink(value) {
    if(value === ''){
     this.string.push('( )');
     return this;
    }else{
    this.string.push(`( ${value} )`);
    return this;
    }
  },
  removeLink(position) {
    if(typeof position === 'number' && !isNaN(position) && Number.isInteger(position) && typeof this.string[position - 1] !== 'undefined'){
      this.string.splice(position - 1, 1);
      return this;
    }else{
    this.finishChain();
     throw new Error();
    } 
  },
  reverseChain() {
   this.string.reverse();
   return this;
  },
  finishChain() {
      const str = this.string.join('~~');
      this.string = [];
      return str;
  }
};

module.exports = chainMaker;
