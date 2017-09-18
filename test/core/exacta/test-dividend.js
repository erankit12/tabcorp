var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var dividend= require('../../../core/exacta/dividend.js');
var exacta = require('../../../core/exacta/exacta');


describe("Excata dividend", function(){

  var exactaPool = exacta.getExactaPool;
  before(function(done){
    exacta.getExactaPool = function(){
      return { exactaPool: { '2,3': '3' }, exactaPoolAmount: { sum: 3 } };
    }
    done();
  });

  after(function(done){
    exacta.getExactaPool = exactaPool;
    done();
  });


  it("should calculate the dividend for exacta pool", function(done){
    var response = dividend.exactaPoolResponse('2','3');
    var expectedResult = "E:2,3:$0.82";
    assert.deepEqual(response, expectedResult);
    done();
  });

  // after(function(done){
  //   var exactaPool = exacta.getExactaPool();
  //   console.log("exactaPool", exactaPool);
  //   exactaPool.exactaPool = {};
  //   exactaPool.exactaPoolAmount = {
  //     "sum":0.0
  //   };
  //   done();
  // })


});
