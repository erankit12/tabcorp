var helper = require('./helper')
var validInput = (line) =>{
  var flag = false;
  var tokens = line.split(':');
  if(tokens.length !== 4){
    console.log("1");
    return flag;
  }
  if(tokens[0] !== 'Bet' && tokens[0] !== 'Result'){
    console.log("2");
    return flag;
  }
  if(tokens[0] === 'Bet'){
    if(tokens[1] !== 'W' && tokens[1] !== 'P' && tokens[1]!== 'E'){
      console.log("3");
      return flag;
    }
  }
  if(tokens[0] === 'Bet' && (tokens[1] === 'W' || tokens[1] === 'P')){
    if(!helper.isInt(tokens[2]) || isNaN(tokens[3])){
      console.log("4");
      return flag;
    }
  }
  if(tokens[0] === 'Bet' && tokens[1] === 'E'){
    var token = tokens[2].split(",");
    if(token.length !== 2 || !helper.isInt(token[0]) || !helper.isInt(token[1])){
      console.log("5");
      return flag;
    }
    if(isNaN(tokens[3])){
      return flag;
    }
  }
  if(tokens[0] === 'Result'){
    if (!helper.isInt(tokens[1]) || !helper.isInt(tokens[2]) || !helper.isInt(tokens[3])){
      return flag;
    }
  }
  return true;

}

module.exports.valid = validInput;
