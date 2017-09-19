var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var exacta = require('../../../core/exacta/exacta');

describe("Excata ", function(){

  it("should add the bet into exacta pool", function(done){
    var response = exacta.add(['2,3','3']);
    var expectedResult = { exactaPool: { '2,3': '3' }, exactaPoolAmount: { sum: 3 } };
    assert.deepEqual(response, expectedResult);
    done();
  });

});
