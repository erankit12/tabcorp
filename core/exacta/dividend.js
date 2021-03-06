var exacta = require('./exacta');
var tabcorpCommission = require('../../config');

// calculate exacta dividend after taking the tabcorp commission out from exacta pool
var calExactaPoolDividend = (winner, firstRunnerUp) =>{
  var exactaPoolPair = winner+","+firstRunnerUp;
  var puntersShare = (100 - tabcorpCommission.exactaCommission)/100
  var exactaSplitShare = exacta.getExactaPool().exactaPoolAmount.sum * puntersShare;
  if(exacta.getExactaPool().exactaPool[exactaPoolPair]){
    var exactaOutput = "E:"+ exactaPoolPair +":$"+ (exactaSplitShare/exacta.getExactaPool().exactaPool[exactaPoolPair]).toFixed(2);
  }
  else{
    var exactaOutput = "No exacta bet on horses "+ exactaPoolPair + " to come first and second."
  }
  return exactaOutput;
}

module.exports.exactaPoolResponse = calExactaPoolDividend
