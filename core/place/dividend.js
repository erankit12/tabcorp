var place = require('./place');
var tabcorpCommission = require('../../config');


var calcPlacePoolDividend = (result) =>{
  var pool = place.getPlacePool();
  var placeOutput = [];
  var puntersShare = (100 - tabcorpCommission.placeCommission)/100
  var placeSplitShare = (pool.placePoolAmount.sum * puntersShare)/3;
  if(pool.placePool[result[0]]){
    var firstPlaceOutput = "P:" +result[0] +":$" + (placeSplitShare/pool.placePool[result[0]]).toFixed(2);
  }
  else{
    firstPlaceOutput= "No bet on place " + result[0] +" for any horse.";
  }

  if(pool.placePool[result[1]]){
    var secondPlaceOutput = "P:" +result[1] +":$" + (placeSplitShare/pool.placePool[result[1]]).toFixed(2);
  }
  else{
    secondPlaceOutput= "No bet on place " + result[1] +" for any horse.";
  }

  if(pool.placePool[result[2]]){
    var thirdPlaceOutput = "P:" +result[2] +":$" + (placeSplitShare/pool.placePool[result[2]]).toFixed(2);
  }
  else{
    thirdPlaceOutput= "No bet on place " + result[2] +" for any horse.";
  }

  placeOutput.push(firstPlaceOutput);
  placeOutput.push(secondPlaceOutput);
  placeOutput.push(thirdPlaceOutput);
  return placeOutput;
}

module.exports.placePoolResponse = calcPlacePoolDividend;
