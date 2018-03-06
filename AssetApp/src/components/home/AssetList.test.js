import { expect } from 'chai';
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import AssetList from './AssetList';

describe('Given', () => {
     describe('No Assets are available', () => {
        describe('when', () => {
            describe('Call is initiated', () => {
                describe('then', () => {
                     it('should have no table displayed', () => {
                      const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={[]} query={query}/>);
                        expect(wrapper.find('.Assets')).to.have.length(0);
                     });
                });
            });
        });
     })
    describe('5 Assets are available', () => {
        describe('when', () => {
            describe('Call is initiated', () => {
                describe('then', () => {
                    it('should have 6 Header', () => {
                        const assets = [{ "_id": "5a9ba1e179bffd4260759018", "LastName": "Turja", "FirstName": "Tenesha", "MiddleInitial": "C", "Pet": "Both", "FavoriteColor": "Green", "DateOfBirth": "1985-02-03T05:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd426075901a", "LastName": "Evelo", "FirstName": "Dalila", "MiddleInitial": "G", "Pet": "None", "FavoriteColor": "Blue", "DateOfBirth": "1968-06-03T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd4260759019", "LastName": "Runyon", "FirstName": "Yoshie", "MiddleInitial": "H", "Pet": "Cat", "FavoriteColor": "Red", "DateOfBirth": "1979-10-15T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901b", "LastName": "Radican", "FirstName": "Shalonda", "Pet": "Cat", "FavoriteColor": "Turquoise", "DateOfBirth": "1945-04-14T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901c", "LastName": "Brinckerhoff", "FirstName": "Jennifer", "Pet": "Dog", "FavoriteColor": "Yellow", "DateOfBirth": "1980-09-20T04:00:00.000Z", "__v": 0 }]
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query}/>);
                        expect(wrapper.find('.Assets_Row_Header')).to.have.length(6);
                    });

                    it('should have No Active Header', () => {
                        const assets = [{ "_id": "5a9ba1e179bffd4260759018", "LastName": "Turja", "FirstName": "Tenesha", "MiddleInitial": "C", "Pet": "Both", "FavoriteColor": "Green", "DateOfBirth": "1985-02-03T05:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd426075901a", "LastName": "Evelo", "FirstName": "Dalila", "MiddleInitial": "G", "Pet": "None", "FavoriteColor": "Blue", "DateOfBirth": "1968-06-03T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd4260759019", "LastName": "Runyon", "FirstName": "Yoshie", "MiddleInitial": "H", "Pet": "Cat", "FavoriteColor": "Red", "DateOfBirth": "1979-10-15T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901b", "LastName": "Radican", "FirstName": "Shalonda", "Pet": "Cat", "FavoriteColor": "Turquoise", "DateOfBirth": "1945-04-14T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901c", "LastName": "Brinckerhoff", "FirstName": "Jennifer", "Pet": "Dog", "FavoriteColor": "Yellow", "DateOfBirth": "1980-09-20T04:00:00.000Z", "__v": 0 }]
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query} query={query}/>);
                        expect(wrapper.find('.Assets_Row_Header_Active_Ascending')).to.have.length(0);
                        expect(wrapper.find('.Assets_Row_Header_Active_Descending')).to.have.length(0);
                    });
                    it('should have Active Header when query is ascending', () => {
                         const assets = [{ "_id": "5a9ba1e179bffd4260759018", "LastName": "Turja", "FirstName": "Tenesha", "MiddleInitial": "C", "Pet": "Both", "FavoriteColor": "Green", "DateOfBirth": "1985-02-03T05:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd426075901a", "LastName": "Evelo", "FirstName": "Dalila", "MiddleInitial": "G", "Pet": "None", "FavoriteColor": "Blue", "DateOfBirth": "1968-06-03T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd4260759019", "LastName": "Runyon", "FirstName": "Yoshie", "MiddleInitial": "H", "Pet": "Cat", "FavoriteColor": "Red", "DateOfBirth": "1979-10-15T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901b", "LastName": "Radican", "FirstName": "Shalonda", "Pet": "Cat", "FavoriteColor": "Turquoise", "DateOfBirth": "1945-04-14T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901c", "LastName": "Brinckerhoff", "FirstName": "Jennifer", "Pet": "Dog", "FavoriteColor": "Yellow", "DateOfBirth": "1980-09-20T04:00:00.000Z", "__v": 0 }]
                       
                         const query = {
                            asset: null,
                            sort: {
                                "LastName": 1
                            },
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = mount(<AssetList assets={assets} query={query} query={query} updateQueryAndLoad={()=> 'test'} count={5}/>);
                        expect(wrapper.find('.Assets_Row_Header_Active_Ascending')).to.have.length(1);
                    });
                         it('should have Active Header when query is descending', () => {
                        const assets = [{ "_id": "5a9ba1e179bffd4260759018", "LastName": "Turja", "FirstName": "Tenesha", "MiddleInitial": "C", "Pet": "Both", "FavoriteColor": "Green", "DateOfBirth": "1985-02-03T05:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd426075901a", "LastName": "Evelo", "FirstName": "Dalila", "MiddleInitial": "G", "Pet": "None", "FavoriteColor": "Blue", "DateOfBirth": "1968-06-03T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd4260759019", "LastName": "Runyon", "FirstName": "Yoshie", "MiddleInitial": "H", "Pet": "Cat", "FavoriteColor": "Red", "DateOfBirth": "1979-10-15T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901b", "LastName": "Radican", "FirstName": "Shalonda", "Pet": "Cat", "FavoriteColor": "Turquoise", "DateOfBirth": "1945-04-14T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901c", "LastName": "Brinckerhoff", "FirstName": "Jennifer", "Pet": "Dog", "FavoriteColor": "Yellow", "DateOfBirth": "1980-09-20T04:00:00.000Z", "__v": 0 }]
                        const query = {
                            asset: null,
                            sort: {
                                "LastName": -1
                            },
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = mount(<AssetList assets={assets} query={query} query={query} updateQueryAndLoad={()=> 'test'} count={5}/>);
                        const LastNameHeader = wrapper.find('.Assets_Row_Header').first();
                        LastNameHeader.simulate('click');
                        expect(wrapper.find('.Assets_Row_Header_Active_Descending')).to.have.length(1);
                    });
                    it('should have not have Page Footer', () => {
                        const assets = [{ "_id": "5a9ba1e179bffd4260759018", "LastName": "Turja", "FirstName": "Tenesha", "MiddleInitial": "C", "Pet": "Both", "FavoriteColor": "Green", "DateOfBirth": "1985-02-03T05:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd426075901a", "LastName": "Evelo", "FirstName": "Dalila", "MiddleInitial": "G", "Pet": "None", "FavoriteColor": "Blue", "DateOfBirth": "1968-06-03T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba1e179bffd4260759019", "LastName": "Runyon", "FirstName": "Yoshie", "MiddleInitial": "H", "Pet": "Cat", "FavoriteColor": "Red", "DateOfBirth": "1979-10-15T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901b", "LastName": "Radican", "FirstName": "Shalonda", "Pet": "Cat", "FavoriteColor": "Turquoise", "DateOfBirth": "1945-04-14T04:00:00.000Z", "__v": 0 },
                        { "_id": "5a9ba24d79bffd426075901c", "LastName": "Brinckerhoff", "FirstName": "Jennifer", "Pet": "Dog", "FavoriteColor": "Yellow", "DateOfBirth": "1980-09-20T04:00:00.000Z", "__v": 0 }]
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query}/>);
                        expect(wrapper.find('.PageNumber')).to.have.length(0);
                    });
                });
            });
        });
    });
    
     describe('3 Assets are available', () => {
        describe('when', () => {
            describe('Call is initiated', () => {
                describe('then', () => {
                    it('should have no pages', () => {
                        const assets = [{"_id":"5a9ba1e179bffd4260759018","LastName":"Turja","FirstName":"Tenesha","MiddleInitial":"C","Pet":"Both","FavoriteColor":"Green","DateOfBirth":"1985-02-03T05:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd426075901a","LastName":"Evelo","FirstName":"Dalila","MiddleInitial":"G","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1968-06-03T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd4260759019","LastName":"Runyon","FirstName":"Yoshie","MiddleInitial":"H","Pet":"Cat","FavoriteColor":"Red","DateOfBirth":"1979-10-15T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901b","LastName":"Radican","FirstName":"Shalonda","Pet":"Cat","FavoriteColor":"Turquoise","DateOfBirth":"1945-04-14T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901c","LastName":"Brinckerhoff","FirstName":"Jennifer","Pet":"Dog","FavoriteColor":"Yellow","DateOfBirth":"1980-09-20T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901d","LastName":"Votraw","FirstName":"Moses","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1964-11-13T05:00:00.000Z","__v":0}
                        ];
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query} count={3}/>);
                        expect(wrapper.find('.PageNumber')).to.have.length(0);
                    });
                   
                });
            });
        });
    });
    
     describe('6 Assets are available', () => {
        describe('when', () => {
            describe('Call is initiated', () => {
                describe('then', () => {
                    it('should have 2 pages', () => {
                        const assets = [{"_id":"5a9ba1e179bffd4260759018","LastName":"Turja","FirstName":"Tenesha","MiddleInitial":"C","Pet":"Both","FavoriteColor":"Green","DateOfBirth":"1985-02-03T05:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd426075901a","LastName":"Evelo","FirstName":"Dalila","MiddleInitial":"G","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1968-06-03T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd4260759019","LastName":"Runyon","FirstName":"Yoshie","MiddleInitial":"H","Pet":"Cat","FavoriteColor":"Red","DateOfBirth":"1979-10-15T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901b","LastName":"Radican","FirstName":"Shalonda","Pet":"Cat","FavoriteColor":"Turquoise","DateOfBirth":"1945-04-14T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901c","LastName":"Brinckerhoff","FirstName":"Jennifer","Pet":"Dog","FavoriteColor":"Yellow","DateOfBirth":"1980-09-20T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901d","LastName":"Votraw","FirstName":"Moses","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1964-11-13T05:00:00.000Z","__v":0}
                        ];
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query} count={6}/>);
                        
                        expect(wrapper.find('.PageNumber')).to.have.length(4);
                    });
                    it('should have 2 pages and first is active', () => {
                        const assets = [{"_id":"5a9ba1e179bffd4260759018","LastName":"Turja","FirstName":"Tenesha","MiddleInitial":"C","Pet":"Both","FavoriteColor":"Green","DateOfBirth":"1985-02-03T05:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd426075901a","LastName":"Evelo","FirstName":"Dalila","MiddleInitial":"G","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1968-06-03T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd4260759019","LastName":"Runyon","FirstName":"Yoshie","MiddleInitial":"H","Pet":"Cat","FavoriteColor":"Red","DateOfBirth":"1979-10-15T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901b","LastName":"Radican","FirstName":"Shalonda","Pet":"Cat","FavoriteColor":"Turquoise","DateOfBirth":"1945-04-14T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901c","LastName":"Brinckerhoff","FirstName":"Jennifer","Pet":"Dog","FavoriteColor":"Yellow","DateOfBirth":"1980-09-20T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901d","LastName":"Votraw","FirstName":"Moses","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1964-11-13T05:00:00.000Z","__v":0}
                        ];
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 1,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query} count={6} activePage={1}/>);
                        expect(wrapper.find('.PageNumber_Active')).to.have.length(1);
                    });
                     it('should have 2 pages and second is active', () => {
                        const assets = [{"_id":"5a9ba1e179bffd4260759018","LastName":"Turja","FirstName":"Tenesha","MiddleInitial":"C","Pet":"Both","FavoriteColor":"Green","DateOfBirth":"1985-02-03T05:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd426075901a","LastName":"Evelo","FirstName":"Dalila","MiddleInitial":"G","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1968-06-03T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba1e179bffd4260759019","LastName":"Runyon","FirstName":"Yoshie","MiddleInitial":"H","Pet":"Cat","FavoriteColor":"Red","DateOfBirth":"1979-10-15T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901b","LastName":"Radican","FirstName":"Shalonda","Pet":"Cat","FavoriteColor":"Turquoise","DateOfBirth":"1945-04-14T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901c","LastName":"Brinckerhoff","FirstName":"Jennifer","Pet":"Dog","FavoriteColor":"Yellow","DateOfBirth":"1980-09-20T04:00:00.000Z","__v":0},
                        {"_id":"5a9ba24d79bffd426075901d","LastName":"Votraw","FirstName":"Moses","Pet":"None","FavoriteColor":"Blue","DateOfBirth":"1964-11-13T05:00:00.000Z","__v":0}
                        ];
                        const query = {
                            asset: null,
                            sort: null,
                            pageNumber: 2,
                            noPerPage: 5
                        }
                        const wrapper = shallow(<AssetList assets={assets} query={query} count={6} activePage={2}/>);
                        expect(wrapper.find('.PageNumber_Active').last()).to.have.length(1);
                    });
                    
                });
            });
        });
    });
});
