var win = require('./win');
var tabcorpCommission = require('../../config');

var calcWinPoolDividend = (winner) =>{
  var puntersShare = (100 - tabcorpCommission.winCommission)/100
  var winSplitShare = win.getWinPool().winPoolAmount.sum * puntersShare;
  if(win.getWinPool().winPool[winner]){
    var winOutput = "W:"+ winner +":$"+ (winSplitShare/win.getWinPool().winPool[winner]).toFixed(2);
  }
  else{
    winOutput= "No bet on winning horse " + winner +".";
  }
  return winOutput;
}

module.exports.winPoolResponse = calcWinPoolDividend
