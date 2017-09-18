var exacta = require('./exacta');
var tabcorpCommission = require('../../config');

var calExactaPoolDividend = (winner, firstRunnerUp) =>{
  var exactaPoolPair = winner+","+firstRunnerUp;
  var puntersShare = (100 - tabcorpCommission.exactaCommission)/100
  var exactaSplitShare = exacta.getExactaPool().exactaPoolAmount.sum * puntersShare;
  var exactaOutput = "E:"+ exactaPoolPair +":$"+ (exactaSplitShare/exacta.getExactaPool().exactaPool[exactaPoolPair]).toFixed(2);
  return exactaOutput;
}

module.exports.exactaPoolResponse = calExactaPoolDividend
