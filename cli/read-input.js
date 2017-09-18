var betSelector = require('./helper/bet-selector');
var calcDividend = require('./helper/calc-dividend');
var response = require('./response');

var readInput = (input) => {
  var inputArr = input.split(":");
  var type = inputArr.shift();
  if (type === "Bet") {
    var betPlaced = betSelector.resolveBet(inputArr);
  }
  else{
    var output = calcDividend.calcDividend(inputArr);
    response.printOutput(output);
  }
}

module.exports.readInput = readInput;
