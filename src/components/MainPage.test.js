import { shallow, mount, render } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {  //runs before each test
 const mockProps = {
 		onRequestRobots: jest.fn(),
 		robots: [],
 		searchField: '',
 		isPending: false
	}
	wrapper = shallow(<MainPage { ...mockProps} />) 
}) 

it('it renders mainpage without crashing', () => {
	expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
	 const mockProps2 = {
 		onRequestRobots: jest.fn(),
 		robots: [{
 			id: 3,
 			name: 'John',
 			email: 'john@gmail.com'
 		}],
 		searchField: 'John',
 		isPending: false
	}
	const wrapper2 = shallow(<MainPage { ...mockProps2} />) 
	expect(wrapper2.instance().filterRobots()).toEqual([{
 			id: 3,
 			name: 'John',
 			email: 'john@gmail.com'
 		}])
}) 

it('filters robots correctly', () => {
	 const mockProps3 = {
 		onRequestRobots: jest.fn(),
 		robots: [{
 			id: 3,
 			name: 'John',
 			email: 'john@gmail.com'
 		}],
 		searchField: 'a',
 		isPending: false
	}
	const filterRobots = []
	const wrapper3 = shallow(<MainPage { ...mockProps3} />) 
	expect(wrapper3.instance().filterRobots()).toEqual(filterRobots);
}) 
