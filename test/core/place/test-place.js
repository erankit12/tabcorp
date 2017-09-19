var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var place = require('../../../core/place/place');

describe("Place ", function(){

  it("should add the bet into place pool", function(done){
    var response = place.add(['3','4']);
    var expectedResult = { placePool: { '3': '4' }, placePoolAmount: { sum: 4 } };
    assert.deepEqual(response, expectedResult);
    done();
  });

});
