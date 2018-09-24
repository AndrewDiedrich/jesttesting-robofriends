import * as actions from './actions';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants'

import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

it('should create search robots action', () => {
	const text = 'woooo';
	const expectedAction = {
		type: CHANGE_SEARCHFIELD,
		payload: text
	}
	expect(actions.setSearchField(text)).toEqual(expectedAction);
})

it('handles requesting robots API', () => {
	const store = mockStore();
	store.dispatch(actions.requestRobots())
	const action = store.getActions();
	const expectedAction = {
		type: REQUEST_ROBOTS_PENDING,
	}
	expect(action[0]).toEqual(expectedAction))
})