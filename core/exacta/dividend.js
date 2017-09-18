var exacta = require('./exacta');
var tabcorpCommission = require('../../config');

var calExactaPoolDividend = (winner, firstRunnerUp) =>{
  var exactaPoolPair = winner+","+firstRunnerUp;
  var puntersShare = (100 - tabcorpCommission.exactaCommission)/100
  var exactaSplitShare = exacta.exactaPoolAmount.sum * puntersShare;
  var exactaOutput = "E:"+ exactaPoolPair +":$"+ (exactaSplitShare/exacta.exactaPool[exactaPoolPair]).toFixed(2);
  return exactaOutput;
}

module.exports.exactaPoolResponse = calExactaPoolDividend
