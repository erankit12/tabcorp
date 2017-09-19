var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var dividend= require('../../../core/place/dividend');
var place = require('../../../core/place/place');


describe("Place dividend", function(){

  var placePool = place.getPlacePool;
  before(function(done){
    place.getPlacePool = function(){
      return { placePool: { '2': '3', '3':'1', '1':'3' }, placePoolAmount: { sum: 7 } };
    }
    done();
  });

  after(function(done){
    place.getPlacePool = placePool;
    done();
  });


  it("should calculate the dividend for place pool", function(done){
    var response = dividend.placePoolResponse(['2','3','1']);
    var expectedResult = [ 'P:2:$0.68', 'P:3:$2.05', 'P:1:$0.68' ];
    assert.deepEqual(response, expectedResult);
    done();
  });

});
