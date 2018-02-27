let assetModel = require('../models/assetModel');
let chai = require('chai');
let should = chai.should();

  describe('Given', () => {
      describe(' Asset is comma seperated', () => {
           describe('Then', () => {
                it.only('it should create', () => {
                    var commaVal = 'Votraw,Moses,None,Blue,11/13/1964';
                    var actual = assetModel.ProcessCommmaFile(commaVal);
                    var expected = {
                        LastName : 'Votraw',
                        FirstName: 'Moses',
                        MiddleInitial: 'None',
                        Pet: 'Blue',
                        DateOfBirth: '11/13/1964'
                    }
                    actual.should.be.equal(expected);
                });
           });
      });
  });