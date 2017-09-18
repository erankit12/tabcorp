var exactaPool = {};
var exactaPoolAmount = {
  "sum":0.0
};

var add = (exactaData) =>{
  exactaPoolAmount.sum = exactaPoolAmount.sum + parseFloat(exactaData[1]);
  if(exactaPool[exactaData[0]]){
    exactaPool[exactaData[0]] = parseFloat(exactaPool[exactaData[0]]) + parseFloat(exactaData[1]);
  }
  else{
    exactaPool[exactaData[0]] = exactaData[1];
  }
}

module.exports.add = add;
module.exports.exactaPool = exactaPool;
module.exports.exactaPoolAmount = exactaPoolAmount;
