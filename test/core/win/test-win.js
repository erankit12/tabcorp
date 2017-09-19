var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var win = require('../../../core/win/win');

describe("Win ", function(){

  it("should add the bet into win pool", function(done){
    var response = win.add(['2','3']);
    var expectedResult = { winPool: { '2': '3' }, winPoolAmount: { sum: 3 } };
    assert.deepEqual(response, expectedResult);
    done();
  });

});
