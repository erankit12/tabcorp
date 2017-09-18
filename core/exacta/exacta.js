var exactaPool = {};
var exactaPoolAmount = {
  "sum":0.0
};
var output = {};

var add = (exactaData) =>{
  exactaPoolAmount.sum = exactaPoolAmount.sum + parseFloat(exactaData[1]);
  if(exactaPool[exactaData[0]]){
    exactaPool[exactaData[0]] = parseFloat(exactaPool[exactaData[0]]) + parseFloat(exactaData[1]);
  }
  else{
    exactaPool[exactaData[0]] = exactaData[1];
  }
  output.exactaPool = exactaPool;
  output.exactaPoolAmount = exactaPoolAmount;
  return output;
}

var getExactaPool = () => {
  return output;
}

module.exports.add = add;
module.exports.getExactaPool = getExactaPool;
//module.exports.exactaPool = exactaPool;
//module.exports.exactaPoolAmount = exactaPoolAmount;
