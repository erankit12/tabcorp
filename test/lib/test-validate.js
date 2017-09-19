var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var validate= require('../../lib/validate');

describe("Validate function ", function(){

  it("should return false for invalid no of tokens", function(done){
    var response = validate.valid('Bet:W:2');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false for invalid entry in input", function(done){
    var response = validate.valid('Betting:W:2:4');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false for invalid entry of bet type", function(done){
    var response = validate.valid('Bet:C:2:4');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false when horse no is not entered in whole digit", function(done){
    var response = validate.valid('Bet:W:2.1:4');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false when amount is not entered in number", function(done){
    var response = validate.valid('Bet:W:2:aa');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false when 2 horses are added in exacta bet", function(done){
    var response = validate.valid('Bet:E:2:4');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false when result values are not whole digit", function(done){
    var response = validate.valid('Result:1.1:2:4');
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return true when input is as per the required format", function(done){
    var response = validate.valid('Bet:W:2:4');
    var expectedResult = true;
    assert.deepEqual(response, expectedResult);
    done();
  });

});
