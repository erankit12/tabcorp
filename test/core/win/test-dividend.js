var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var dividend= require('../../../core/win/dividend.js');
var win = require('../../../core/win/win');


describe("Win dividend", function(){

  var winPool = win.getWinPool;
  before(function(done){
    win.getWinPool = function(){
      return { winPool: { '2': '3', '3':'4' }, winPoolAmount: { sum: 7 } };
    }
    done();
  });

  after(function(done){
    win.getWinPool = winPool;
    done();
  });


  it("should calculate the dividend for win pool", function(done){
    var response = dividend.winPoolResponse('2');
    var expectedResult = "W:2:$1.98";
    assert.deepEqual(response, expectedResult);
    done();
  });

});
