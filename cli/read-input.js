var betSelector = require('./helper/bet-selector');
var calcDividend = require('./helper/calc-dividend');

var readInput = (input) => {
  var inputArr = input.split(":");
  var type = inputArr.shift();
  if (type === "Bet") {
    betSelector.resolveBet(inputArr);
  }
  else{
    calcDividend.calcDividend(inputArr);
  }
}

module.exports.readInput = readInput;
