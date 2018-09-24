import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

//***snapshot to relate to next render
it('expect to render CardList component', () => {
	const mockRobots = [
	{
		id: 1,
		name: 'John Snow',
		username: 'JohnJohn',
		email: 'john@gmail.com'
	}
]
	expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot(); 
})

//pass robots because its in the Cardlist component
//