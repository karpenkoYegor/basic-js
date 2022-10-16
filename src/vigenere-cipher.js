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
  constructor(type = true){
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.alphabetNumbers = { "a" : 1, "b" : 2, "c" : 3, 
                      "d" : 4, "e" : 5, "f" : 6, 
                      "g" : 7, "h" : 8, "i" : 9, 
                      "j" : 10, "k" : 11, "l" : 12, 
                      "m" : 13, "n" : 14, "o" : 15, 
                      "p" : 16, "q" : 17, "r" : 18, 
                      "s" : 19, "t" : 20, "u" : 21, 
                      "v" : 22, "w" : 23, "x" : 24, 
                      "y" : 25, "z" : 26
                    };
    this.type = type;
  }
  encrypt(message, key) {
    let encrypt = "";
    if(!message || !key)
      throw new Error('Incorrect arguments!');
    let count = 0;
    
      for (let i = 0; i < message.length; i++) {
        if(this.alphabetNumbers[message[i].toLowerCase()]){
          let keyNum = this.alphabetNumbers[key[(i- count)%key.length].toLowerCase()];
          let messageNum = this.alphabetNumbers[message[i].toLowerCase()];
          encrypt += this.alphabet[(messageNum + keyNum - 2) % 26].toUpperCase();
        }
        else{
          encrypt += message[i];
          count++;
        }
      }
    if(this.type) {
      return encrypt;
    }
    else{
      return encrypt.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    let decrypt = "";
    if(!message || !key)
      throw new Error('Incorrect arguments!');
    let count = 0;
    let num = 0;
      for (let i = 0; i < message.length; i++) {
        if(this.alphabetNumbers[message[i].toLowerCase()]){
          let keyNum = this.alphabetNumbers[key[(i - count)%key.length].toLowerCase()]-1;
          let encryptNum = this.alphabetNumbers[message[i].toLowerCase()]-1;
          if((encryptNum - keyNum) < 0){
            num = 26 + (encryptNum - keyNum);
          }
          else{
            num = encryptNum - keyNum;
          }
          decrypt += this.alphabet[num].toUpperCase();
        }
        else{
          decrypt += message[i];
          count++;
        }
      }
      if(this.type) {
        return decrypt;
      }
      else{
        return decrypt.split("").reverse().join("");
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
