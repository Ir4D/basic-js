const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length
  },
  addLink(value) {
    this.value.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if ((position - 1) in this.value) {
      this.value.splice(position - 1, 1);
      return this;
    }
    this.value = [];
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    let newArr = [];
    for (let i = this.value.length - 1; i >= 0; i--) { 
      newArr.push(this.value[i]);
    }
    this.value = newArr;
    return this
  },
  finishChain() {
    let newArr = this.value.join('~~');
    this.value = [];
    return newArr;
  }
};

module.exports = {
  chainMaker
};
