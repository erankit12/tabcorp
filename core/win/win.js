var winPool = {};
var winPoolAmount = {
  "sum":0.0
};
var output = {};

// to add win bet entry into win pool and calculate sum of win pool as well
var add = (winData) =>{
  winPoolAmount.sum = winPoolAmount.sum + parseFloat(winData[1]);
  if(winPool[winData[0]]){
    winPool[winData[0]] = parseFloat(winPool[winData[0]]) + parseFloat(winData[1]);
  }
  else{
    winPool[winData[0]] = winData[1];
  }
  output.winPool = winPool;
  output.winPoolAmount = winPoolAmount;
  return output;
}

var getWinPool = ()=> {
  return output;
}
module.exports.add = add;
module.exports.getWinPool = getWinPool;
//module.exports.winPool = winPool;
//module.exports.winPoolAmount = winPoolAmount;
