var helper = require('./helper')
var validInput = (line) =>{
  var flag = false;
  var tokens = line.split(':');

  //to check if input is as per the required length ie 4
  if(tokens.length !== 4){
    return flag;
  }

  //to check if first token is of type Bet or Result
  if(tokens[0] !== 'Bet' && tokens[0] !== 'Result'){
    return flag;
  }

  //to check if first token in Bet then second token should be W, P or E
  if(tokens[0] === 'Bet'){
    if(tokens[1] !== 'W' && tokens[1] !== 'P' && tokens[1]!== 'E'){
      return flag;
    }
  }

  /* to check if first token is Bet and second token is either W or P
  then third should be int and fourth should be a number. */
  if(tokens[0] === 'Bet' && (tokens[1] === 'W' || tokens[1] === 'P')){
    if(!helper.isInt(tokens[2]) || isNaN(tokens[3])){
      return flag;
    }
  }

  /* to check if first token is Bet and second is E
   then third token should be a comma separated pair
   and it should have 2 places and both should be int */
  if(tokens[0] === 'Bet' && tokens[1] === 'E'){
    var token = tokens[2].split(",");
    if(token.length !== 2 || !helper.isInt(token[0]) || !helper.isInt(token[1])){
      return flag;
    }
    if(isNaN(tokens[3])){
      return flag;
    }
  }
  /* to check if first token is Result
  then all the remaining 3 tokens should be int */
  if(tokens[0] === 'Result'){
    if (!helper.isInt(tokens[1]) || !helper.isInt(tokens[2]) || !helper.isInt(tokens[3])){
      return flag;
    }
  }
  return true;

}

module.exports.valid = validInput;
