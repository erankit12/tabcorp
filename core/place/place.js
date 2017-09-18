var placePool = {};
var placePoolAmount = {
  "sum":0.0
};
var output = {};

var add = (placeData) =>{
  placePoolAmount.sum = placePoolAmount.sum + parseFloat(placeData[1]);
  if(placePool[placeData[0]]){
    placePool[placeData[0]] = parseFloat(placePool[placeData[0]]) + parseFloat(placeData[1]);
  }
  else{
    placePool[placeData[0]] = placeData[1];
  }
  output.placePool = placePool;
  output.placePoolAmount = placePoolAmount;
  return output;
}

var getPlacePool = () => {
  return output;
}
module.exports.add = add;
module.exports.getPlacePool = getPlacePool;
//module.exports.placePool = placePool;
//module.exports.placePoolAmount = placePoolAmount;
