var placePool = {};
var placePoolAmount = {
  "sum":0.0
};

var add = (placeData) =>{
  placePoolAmount.sum = placePoolAmount.sum + parseFloat(placeData[1]);
  if(placePool[placeData[0]]){
    placePool[placeData[0]] = parseFloat(placePool[placeData[0]]) + parseFloat(placeData[1]);
  }
  else{
    placePool[placeData[0]] = placeData[1];
  }
}

module.exports.add = add;
module.exports.placePool = placePool;
module.exports.placePoolAmount = placePoolAmount;
