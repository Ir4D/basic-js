const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    if (message.length !== key.length) {
      let base = '';
      for (let i = 0; base.length < message.length; i++) {
        base = base + key;
      }
      base = base.split('');
      for (let i = 0; i < message.length; i++) {
        if (!(message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) < 91)) {
          base.splice(i, 0, message[i]);
        }
      }
      for (let i = 0; base.length !== message.length; i++) {
        base = base.slice(0, -1);
        key = base.join('');
      }
    }
    let text = '';
    for (let i = 0; i < message.length; i++) {
      let char;
      if (message[i].charCodeAt(0) >= 65 && message[i].charCodeAt(0) < 91) {
        char = ((message[i].charCodeAt(0) + key[i].charCodeAt(0)) % 26) + 65;
        text = text + String.fromCharCode(char);
      } else {
        text = text + message[i];
      }
    }
    if (this.type === undefined || this.type === true) {
      return text;
    } else {
      return text.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    if (encryptedMessage.length !== key.length) {
      let base = '';
      for (let i = 0; base.length < encryptedMessage.length; i++) {
        base = base + key;
      }
      base = base.split('');
      for (let i = 0; i < encryptedMessage.length; i++) {
        if (!(encryptedMessage[i].charCodeAt(0) >= 65 && encryptedMessage[i].charCodeAt(0) < 91)) {
          base.splice(i, 0, encryptedMessage[i]);
        }
      }

      for (let i = 0; base.length !== encryptedMessage.length; i++) {
        base = base.slice(0, -1);
        key = base.join('');
      }
    }
    let text = '';
    for (let i = 0; i < encryptedMessage.length; i++) {
      let char;
      if (encryptedMessage[i].charCodeAt(0) >= 65 && encryptedMessage[i].charCodeAt(0) < 91) {
        char = ((encryptedMessage[i].charCodeAt(0) + 26 - key[i].charCodeAt(0)) % 26) + 65;
        text = text + String.fromCharCode(char);
      } else {
        text = text + encryptedMessage[i];
      }
    }

    if (this.type === undefined || this.type === true) {
      return text;
    } else {
      return text.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
