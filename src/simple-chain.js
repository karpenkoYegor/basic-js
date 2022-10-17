const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result : [],

  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position - 1 >= 0 && position - 1 < this.result.length){
      this.result.splice(position-1, 1);
      return this;
    }
    else{
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let res = this.result.join("~~");
    this.result = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
