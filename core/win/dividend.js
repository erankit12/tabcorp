var win = require('./win');
var tabcorpCommission = require('../../config');

var calcWinPoolDividend = (winner) =>{
  var puntersShare = (100 - tabcorpCommission.winCommission)/100
  var winSplitShare = win.getWinPool().winPoolAmount.sum * puntersShare;
  var winOutput = "W:"+ winner +":$"+ (winSplitShare/win.getWinPool().winPool[winner]).toFixed(2);
  return winOutput;
}

module.exports.winPoolResponse = calcWinPoolDividend
