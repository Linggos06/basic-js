const CustomError = require("../extensions/custom-error");

const chainMaker = {
  string: [],
  getLength() {
    return this.string.length;
  },
  addLink(value) {
    if(!value){
     this.string.push('( )');
     return this;
    }else{
    this.string.push(`( ${value} )`);
    return this;
    }
  },
  removeLink(position) {
   this.string.splice(position, 1);
   return this;
  },
  reverseChain() {
   this.string.reverse();
   return this;
  },
  finishChain() {
    const str = this.string.join('~~');
    return str;
  }
};

module.exports = chainMaker;
