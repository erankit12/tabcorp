var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var helper= require('../../lib/helper');

describe("Helper ", function(){

  it("should return true for integer value", function(done){
    var response = helper.isInt(4);
    var expectedResult = true;
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should return false for non integer value", function(done){
    var response = helper.isInt(4.1);
    var expectedResult = false;
    assert.deepEqual(response, expectedResult);
    done();
  });

});
