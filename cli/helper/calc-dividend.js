var winDividend = require('../../core/win/dividend');
var placeDividend = require('../../core/place/dividend');
var exactaDividend = require('../../core/exacta/dividend');
var win = require('../../core/win/win');
var place = require('../../core/place/place');
var exacta = require('../../core/exacta/exacta');
var response = require('../response');

var calcDividend = (result) =>{
  var output = [];

  if(win.getWinPool().winPoolAmount && win.getWinPool().winPoolAmount.sum > 0){
    output.push(winDividend.winPoolResponse(result[0]));
  }

  if(place.getPlacePool().placePoolAmount && place.getPlacePool().placePoolAmount.sum > 0){
    placeDividend.placePoolResponse(result).forEach(function(out){
      output.push(out);
    });
  }

  if(exacta.getExactaPool().exactaPoolAmount && exacta.getExactaPool().exactaPoolAmount.sum > 0){
    output.push(exactaDividend.exactaPoolResponse(result[0], result[1]));
  }
  return output;
}

module.exports.calcDividend = calcDividend;
