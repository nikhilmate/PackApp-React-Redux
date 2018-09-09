import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/style.scss';
import { editCase, addCase, removeCase } from './actions/calculator';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

const App = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let app = document.getElementById('app');
ReactDOM.render(App, app);
