var win = require('../core/win/win');
var place = require('../core/place/place');
var exacta = require('../core/exacta/exacta');

var bet = (betData) =>{
  betType = betData.shift();
  if(betType === 'W'){
    win.add(betData);
  }
  else if(betType === 'P'){
    place.add(betData);
  }
  else if(betType === 'E'){
    exacta.add(betData);
  }
  else{
    process.stdout.write("Invalid input");
    process.exit(1);
  }
}
module.exports.bet = bet;
