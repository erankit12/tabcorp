var win = require('../../core/win/win');
var place = require('../../core/place/place');
var exacta = require('../../core/exacta/exacta');

var resolveBet = (betData) =>{
  var betType = betData.shift();
  var output;
  if(betType === 'W'){
    output = win.add(betData);
  }
  else if(betType === 'P'){
    output = place.add(betData);
  }
  else{
    output = exacta.add(betData);
  }
  return output;
}
module.exports.resolveBet = resolveBet;
