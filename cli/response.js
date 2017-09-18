var printOutput = (output) => {
  output.forEach(function(out){
    process.stdout.write(out+"\n");
  })
  process.exit(0);
}

var invalidInput = () => {
  process.stdout.write("Invalid input");
  process.exit(0);
}

module.exports.invalidInput = invalidInput;
module.exports.printOutput = printOutput;
