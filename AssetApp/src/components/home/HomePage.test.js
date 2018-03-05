import { expect } from 'chai';
import React from 'react';
//import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import HomePage from './HomePage';
import AssetList from './AssetList';

describe('Given', () => {
    describe('Asset Management is ready & no props supplied', () => {
        describe('when', () => {
            describe('Asset management in acessed in browser', () => {
                describe('then', () => {
                    it('should have .Hompage', () => {
                        const wrapper = shallow(<HomePage />);
                        expect(wrapper.find('.HomePage')).to.have.length(1);
                    });
                    it('should not have <AssetList/>', () => {
                        const wrapper = shallow(<HomePage />);
                        expect(wrapper.find(<AssetList />)).to.have.length(0);
                    });
                    it('should have assets & totalAssestnot  to be defined', () => {
                        const wrapper = shallow(<HomePage/>);
                        expect(wrapper.props().assets).to.be.undefined;
                        expect(wrapper.props().assetCount).to.be.undefined;
                    });
                    it('should have .Hompage_Content', () => {
                        const wrapper = shallow(<HomePage />);
                        expect(wrapper.props().children.props).to.have.property('className').eql('HomePage_Content')
                    });
                    it('should have not .Hompage_Content', () => {
                        const wrapper = shallow(<HomePage />);
                        expect(wrapper.find('.HomePage_Content_People')).to.have.length(0);
                    });
                    it('should have .HomePage_Content_Display_Upload_Wrapper_Form_Button', () => {
                        const wrapper = shallow(<HomePage />);
                        expect(wrapper.find('.HomePage_Content_Display_Upload_Wrapper_Form_Button')).to.have.length(1);
                    });
                });
            });
        });
    });
    describe('Asset Management is ready & props are supplied', () => {
        describe('when', () => {
            describe('Asset management in acessed in browser', () => {
                describe('then', () => {
                    it('should have .HomePage classnemae', () => {
                        const props = {
                            assets: [],
                            assetCount: 4,
                            ajaxCallInProgress: 0
                        }
                        const wrapper = shallow(<HomePage {...props} />);
                        expect(wrapper.props().className).to.have.be.eql('HomePage');
                    });
                    it('should have <AssetList/>', () => {
                        const props = {
                            assets: [],
                            assetCount: 4,
                            ajaxCallInProgress: 0
                        }
                        const wrapper = shallow(<HomePage {...props} />);
                        expect(wrapper.find(<AssetList />)).to.have.length(0);
                    });
                    it('should have .Hompage_Content', () => {
                        const props = {
                            assets: [],
                            assetCount: 4,
                            ajaxCallInProgress: 0
                        }
                        const wrapper = shallow(<HomePage {...props} />);
                        expect(wrapper.props().children.props).to.have.property('className').eql('HomePage_Content');
                    });
                     it.skip('should have .HomePage_Content_People', () => {
                        const props = {
                            assets: [],
                            assetCount: 4,
                            ajaxCallInProgress: 0
                        }
                        const wrapper = shallow(<HomePage {...props} />);
                        expect(wrapper.find('.HomePage_Content_People')).to.have.length(1);
                    });
                    it.skip('should have .HomePage_Content_People with value 4 people', () => {
                        const props = {
                            assets: [],
                            assetCount: 4,
                            ajaxCallInProgress: 0
                        }
                        const wrapper = shallow(<HomePage {...props} />);
                        //console.log(wrapper.find('.HomePage_Content_People'))
                        expect(wrapper.find('.HomePage_Content_People')).to.have.length(1);
                    });
                });
            });
        });
    });
});
