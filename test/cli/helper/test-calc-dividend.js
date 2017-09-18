var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var calcDividend= require('../../../cli/helper/calc-dividend.js')
var win = require('../../../core/win/win.js');
var exacta = require('../../../core/exacta/exacta');
var place = require('../../../core/place/place');

describe("Calculate dividend", function(){
  var winPool = win.getWinPool;
  var placePool = place.getPlacePool;
  var exactaPool = exacta.getExactaPool;
  before(function(done){
    win.getWinPool = function(){
      return { winPool: { '2': '3' }, winPoolAmount: { sum: 3 } };
    }
    place.getPlacePool = function(){
      return { placePool: { '2': '3', '3':'1','1':'4' }, placePoolAmount: { sum: 3 } };
    }
    exacta.getExactaPool = function(){
      return { exactaPool: { '2,3': '3' }, exactaPoolAmount: { sum: 3 } };
    }
    done();
  });

  after(function(done){
    win.getWinPool = winPool;
    place.getPlacePool = placePool;
    exacta.getExactaPool = exactaPool;
    done();
  });

  it("should test calculation of dividend for all types of bet", function(done){
    var response = calcDividend.calcDividend(['2','3','1']);
    var expectedResult = [ 'W:2:$0.85', 'P:2:$0.29', 'P:3:$0.88', 'P:1:$0.22', 'E:2,3:$0.82' ];
    assert.deepEqual(response, expectedResult);
    done();
  });

  // after(function(done){
  //   var e=exacta.getExactaPool();
  //   console.log('-------',e)
  //   exactaPool.exactaPool = {};
  //   exactaPool.exactaPoolAmount = {
  //     "sum":0.0
  //   };
  //   done();
  // })

});
