var win = require('../../core/win/win');
var place = require('../../core/place/place');
var exacta = require('../../core/exacta/exacta');

var resolveBet = (betData) =>{
  var betType = betData.shift();
  if(betType === 'W'){
    win.add(betData);
  }
  else if(betType === 'P'){
    place.add(betData);
  }
  else{
    exacta.add(betData);
  }
}
module.exports.resolveBet = resolveBet;
