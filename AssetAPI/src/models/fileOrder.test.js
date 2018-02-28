let assetModel = require('../models/assetModel');
let chai = require('chai');
let should = chai.should();
let fileOrder = require('./fileOrder');
describe('File Order Tests', () => {
    it('should have comma seperated file const order in correct order', () => {
        fileOrder.COMMA_DELIMITED_FILE_ORDER.should.be.equal('LastName,FirstName,Pet,FavoriteColor,DateOfBirth');
    });
    it('should have space seperated file const order in correct order', () => {
        fileOrder.SPACE_DELIMITED_FILE_ORDER.should.be.equal('LastName FirstName MiddleInitial Pet DateOfBirth FavoriteColor');
    });
    it('should have pipe seperated file const order in correct order', () => {
        fileOrder.PIPE_DELIMITED_FILE_ORDER.should.be.equal('LastName|FirstName|MiddleInitial|Pet|FavoriteColor|DateOfBirth');
    });
});