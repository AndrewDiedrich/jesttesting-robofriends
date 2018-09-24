import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

//***snapshot to relate to next render
it('expect to render Card component', () => {
	expect(shallow(<Card />)).toMatchSnapshot(); //shallow render and takes snapshot
})


//*********Shallow render single components
// it('expect to render Card component', () => {
// 	expect(shallow(<Card />).length).toEqual(1) //shallow render card component, just renders card
// })

//expect(mount()) //for dom api's, lifecycle method like component did mount renders full, use jsdom
//expect(render()) //returns static html, uses library cheerio, does need full dom api, but renders all card children
