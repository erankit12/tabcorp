var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var betSelector= require('../../../cli/helper/bet-selector.js')
var exacta = require('../../../core/exacta/exacta');
var place = require('../../../core/place/place');
var win = require('../../../core/win/win');

// function requireUncached(module){
//     delete require.cache[require.resolve(module)]
//     return require(module)
// }

describe("Bet Selector", function(){
  var winAdd = win.add;
  var placeAdd = place.add;
  var exactaAdd = exacta.add;
  before(function(done){
    win.add = function(data){
      return { winPool: { '2': '3' }, winPoolAmount: { sum: 3 } };
    }
    place.add = function(data){
      return { placePool: { '2': '3' }, placePoolAmount: { sum: 3 } };
    }
    exacta.add = function(data){
      return { exactaPool: { '2,3': '3' }, exactaPoolAmount: { sum: 3 } };
    }
    done();
  });
  after(function(done){
    win.add = winAdd;
    place.add = placeAdd;
    exacta.add = exactaAdd;
    done();
  });
  it("should test for bet type to be W", function(done){
    var response = betSelector.resolveBet(['W','2','3']);
    var expectedResult = { winPool: { '2': '3' }, winPoolAmount: { sum: 3 } }
    assert.deepEqual(response, expectedResult);
    done();
  });

  it("should test for bet type to be P", function(done){
    var response = betSelector.resolveBet(['P','2','3']);
    var expectedResult = { placePool: { '2': '3' }, placePoolAmount: { sum: 3 } }
    assert.deepEqual(response, expectedResult);
    done();
  })

  it("should test for bet type to be E", function(done){
    var response = betSelector.resolveBet(['E','2,3','3']);
    var expectedResult = { exactaPool: { '2,3': '3' }, exactaPoolAmount: { sum: 3 } }
    assert.deepEqual(response, expectedResult);
    done();
  })

  // after(function(done){
  //   var exactaPool = exacta.getExactaPool();
  //   exactaPool.exactaPool = {};
  //   exactaPool.exactaPoolAmount = {
  //     "sum":0.0
  //   };
  //   var winPool = win.getWinPool();
  //   winPool.winPool = {};
  //   winPool.winPoolAmount = {
  //     "sum":0.0
  //   };
  //   var placePool = place.getPlacePool();
  //   placePool.placePool = {};
  //   placePool.placePoolAmount = {
  //     "sum":0.0
  //   };
  //   done();
  // })

});
