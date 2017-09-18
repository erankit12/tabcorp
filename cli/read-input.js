var betType = require('./bet-type');
var calcDividend = require('./calc-dividend')

var readInput = (input) => {
  var inputArr = input.split(":");
  var type = inputArr.shift();
  if (type === "Bet") {
    betType.bet(inputArr);
  }
  else{
    calcDividend.calcDividend(inputArr);
  }
}

module.exports.readInput = readInput;
