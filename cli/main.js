var readline = require('readline');
var input = require('./read-input');
var validate = require('../lib/validate');
var response = require('./response');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
/* read input line by line and check the validation of input
if validation passed then proceed else pass the request to handle invalidation */
rl.on('line', function (data) {
  if(validate.valid(data)){
    input.readInput(data)
  }
  else{
    response.invalidInput();
  }

});
