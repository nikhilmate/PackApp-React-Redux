import { createStore, combineReducers } from 'redux';
import reducer from '../reducers/calculator';
//import caseReducer from '../reducers/caseReducer';

export default () => {
	const store = createStore(
		combineReducers({
			calculator : reducer
		})
	);
	return store;
};