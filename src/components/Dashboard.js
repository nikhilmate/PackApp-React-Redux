import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => (
  <div className="dashboard">
    <h1>Welcome to My Packapp!</h1>
    <NavLink to='/run' className="link" activeClassName="link-btn" exact={true}>Start</NavLink>
  </div>
);

export default Dashboard;