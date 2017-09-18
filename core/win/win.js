var winPool = {};
var winPoolAmount = {
  "sum":0.0
};

var add = (winData) =>{
  winPoolAmount.sum = winPoolAmount.sum + parseFloat(winData[1]);
  if(winPool[winData[0]]){
    winPool[winData[0]] = parseFloat(winPool[winData[0]]) + parseFloat(winData[1]);
  }
  else{
    winPool[winData[0]] = winData[1];
  }
}

module.exports.add = add;
module.exports.winPool = winPool;
module.exports.winPoolAmount = winPoolAmount;
