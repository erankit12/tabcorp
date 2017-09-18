var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var exacta = require('../../../core/exacta/exacta');

describe("Excata ", function(){

  // before(function(done){
  //   var exactaPool = exacta.getExactaPool();
  //   console.log("exactaPool", exactaPool);
  //   exactaPool.exactaPool = {};
  //   exactaPool.exactaPoolAmount = {
  //     "sum":0.0
  //   };
  //   console.log("exactaPool1", exactaPool);
  //   done();
  // })
  it("should calculate the dividend for exacta pool", function(done){
    var response = exacta.add(['2,3','3']);
    var expectedResult = { exactaPool: { '2,3': '3' }, exactaPoolAmount: { sum: 3 } };
    assert.deepEqual(response, expectedResult);
    done();
  });



});
