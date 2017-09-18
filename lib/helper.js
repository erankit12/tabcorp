var isInt = (num) => {
  if(!isNaN(num)){
    return (num%1 === 0);
  }
  else{
    return false;
  }

}

module.exports.isInt = isInt;
