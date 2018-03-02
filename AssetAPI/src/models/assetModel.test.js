let Create = require('../models/assetModel').Create;
let chai = require('chai');
let should = chai.should();
describe('Asset Model ATDD Tests', () => {
    describe('Scenario 1: Process comma seprated values', () => {
        describe('Given', () => {
            describe('All properties are valid & non empty', () => {
                describe('When create is initiated', () => {
                    describe('Then', () => {
                        it('it should create asset with valid properties', () => {
                            var commaVal = 'Votraw,Moses,None,Blue,11/13/1964';
                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '11/13/1964',
                                FavoriteColor: 'Blue',
                                Pet: 'None',
                                FirstName: 'Moses',
                                LastName: 'Votraw'
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                        });
                    });
                });
            });
            describe('Some properties are valid & non empty', () => {
                describe('Then', () => {
                    describe('When create is initiated', () => {
                        it('it should create asset with valid and others as empty', () => {
                            var commaVal = 'Votraw,Moses';
                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '',
                                FavoriteColor: '',
                                Pet: '',
                                FirstName: 'Moses',
                                LastName: 'Votraw'
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                        });
                    });
                });
            });
            describe(' All properties are valid & empty', () => {
                describe('Then', () => {
                    describe('When create is initiated', () => {
                        it('it should create Asset with empty properties', () => {
                            var commaVal = ',,,,';
                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '',
                                FavoriteColor: '',
                                Pet: '',
                                FirstName: '',
                                LastName: ''
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                        });
                    });
                });
            });
        });
    });
    describe('Scenario 2: Process Pipe seprated values', () => {
        describe('Given', () => {
            describe('All properties are valid & non empty', () => {
                describe('When create is initiated', () => {
                    describe('Then', () => {
                        it('it should create asset with valid properties', () => {
                            var commaVal = 'Evelo|Dalila|G|None|Blue|6-3-1968';
                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '6-3-1968',
                                FavoriteColor: 'Blue',
                                MiddleInitial: 'G',
                                Pet: 'None',
                                FirstName: 'Dalila',
                                LastName: 'Evelo'
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                            actual.should.have.property("MiddleInitial");
                            actual.should.have.property("MiddleInitial").eql(expected["MiddleInitial"]);
                        });
                    });
                });
            });
            describe(' All properties values are empty', () => {
                describe('When create is initiated', () => {
                    describe('Then', () => {
                        it('it should create Asset with empty properties', () => {
                            var commaVal = '||||';
                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '',
                                FavoriteColor: '',
                                Pet: '',
                                FirstName: '',
                                LastName: '',
                                MiddleInitial: ''
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                            actual.should.have.property("MiddleInitial");
                            actual.should.have.property("MiddleInitial").eql(expected["MiddleInitial"]);
                        });
                    });
                });
            });
            describe('Some properties exists are valid & non empty', () => {
                describe('When create is initiated', () => {
                    describe('Then', () => {
                        it('it should create Asset with empty properties', () => {
                            var commaVal = 'test|name';

                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '',
                                FavoriteColor: '',
                                Pet: '',
                                MiddleInitial: '',
                                FirstName: 'name',
                                LastName: 'test'
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                            actual.should.have.property("MiddleInitial");
                            actual.should.have.property("MiddleInitial").eql(expected["MiddleInitial"]);
                        });
                    });
                });
            });
        });
    });
    describe('Scenario 3: Process Space seprated values', () => {
        describe('Given', () => {
            describe('All properties are valid & non empty', () => {
                describe('When create is initiated', () => {
                    describe('Then', () => {
                        it('it should create asset with valid properties', () => {
                            var commaVal = 'Venessa Mearse U D 3-3-1992 Black';
                            var actual = Create(commaVal);
                            var expected = {
                                DateOfBirth: '3-3-1992',
                                FavoriteColor: 'Black',
                                MiddleInitial: 'U',
                                Pet: 'D',
                                FirstName: 'Mearse',
                                LastName: 'Venessa'
                            };
                            actual.should.have.property("LastName");
                            actual.should.have.property("LastName").eql(expected["LastName"]);
                            actual.should.have.property("DateOfBirth");
                            actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                            actual.should.have.property("FavoriteColor");
                            actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                            actual.should.have.property("Pet");
                            actual.should.have.property("Pet").eql(expected["Pet"]);
                            actual.should.have.property("FirstName");
                            actual.should.have.property("FirstName").eql(expected["FirstName"]);
                            actual.should.have.property("MiddleInitial");
                            actual.should.have.property("MiddleInitial").eql(expected["MiddleInitial"]);
                        });
                    });
                });
            });
            describe(' Asset is comma seperated having only first name & last name as valid inputs', () => {
                describe('Then', () => {
                    it('it should create asset with valid and others as empty', () => {
                        var commaVal = 'Venessa Mearse';
                        var actual = Create(commaVal);
                        var expected = {
                            DateOfBirth: '',
                            FavoriteColor: '',
                            MiddleName: '',
                            Pet: '',
                            FirstName: 'Mearse',
                            LastName: 'Venessa'
                        };
                        actual.should.have.property("LastName");
                        actual.should.have.property("LastName").eql(expected["LastName"]);
                        actual.should.have.property("DateOfBirth");
                        actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                        actual.should.have.property("FavoriteColor");
                        actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                        actual.should.have.property("Pet");
                        actual.should.have.property("Pet").eql(expected["Pet"]);
                        actual.should.have.property("FirstName");
                        actual.should.have.property("FirstName").eql(expected["FirstName"]);
                    });
                });
            });
            describe(' Asset is space seperated having valid values that empty', () => {
                describe('Then', () => {
                    it('it should create Asset with empty properties', () => {
                        var commaVal = '     ';
                        var actual = Create(commaVal);
                        var expected = {
                            DateOfBirth: '',
                            FavoriteColor: '',
                            Pet: '',
                            FirstName: '',
                            LastName: ''
                        };
                        actual.should.have.property("LastName");
                        actual.should.have.property("LastName").eql(expected["LastName"]);
                        actual.should.have.property("DateOfBirth");
                        actual.should.have.property("DateOfBirth").eql(expected["DateOfBirth"]);
                        actual.should.have.property("FavoriteColor");
                        actual.should.have.property("FavoriteColor").eql(expected["FavoriteColor"]);
                        actual.should.have.property("Pet");
                        actual.should.have.property("Pet").eql(expected["Pet"]);
                        actual.should.have.property("FirstName");
                        actual.should.have.property("FirstName").eql(expected["FirstName"]);
                    });
                });
            });
        });
    });
});