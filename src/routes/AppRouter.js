import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Calculate from '../components/Calculate';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
		<div className="router">
			<Switch>
				<Route path="/" exact={true} component={Dashboard}/>
				<Route path="/run" component={Calculate} />
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;