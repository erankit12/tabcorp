var readline = require('readline');
var input = require('./read-input');
var validate = require('../lib/validate');
var response = require('./response');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
rl.on('line', function (data) {
  if(validate.valid(data)){
    input.readInput(data)
  }
  else{
    response.invalidInput();
  }

});
