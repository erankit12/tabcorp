var place = require('./place');
var tabcorpCommission = require('../../config');


var calcPlacePoolDividend = (result) =>{
  var pool = place.getPlacePool();
  var placeOutput = [];
  var puntersShare = (100 - tabcorpCommission.placeCommission)/100
  var placeSplitShare = (pool.placePoolAmount.sum * puntersShare)/3;
  var firstPlaceOutput = "P:" +result[0] +":$" + (placeSplitShare/pool.placePool[result[0]]).toFixed(2);
  var secondPlaceOutput = "P:" +result[1] +":$" + (placeSplitShare/pool.placePool[result[1]]).toFixed(2);
  var thirdPlaceOutput = "P:" +result[2] +":$" + (placeSplitShare/pool.placePool[result[2]]).toFixed(2);
  placeOutput.push(firstPlaceOutput);
  placeOutput.push(secondPlaceOutput);
  placeOutput.push(thirdPlaceOutput);
  return placeOutput;
}

module.exports.placePoolResponse = calcPlacePoolDividend;
