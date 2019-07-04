import React from 'react';
import { Route, BrowserRouter as Router} from 'react-router-dom';

import DashboardHeader from '../dashboard/Header/DashboardHeader';
import DashboardPage from './Body/DashboardPage/DashboardPage';

import CostsPage from './Body/CostsPage/CostsPage';
import AppliancesPage from './Body/AppliancesPage/AppliancesPage';
import UsagePage from './Body/UsagePage/UsagePage';
import EmissionsPage from './Body/EmissionsPage/EmissionsPage';

function Dashboard(props) {
  return (
      <Router>
        <div style={{display: "flex"}}>
          <DashboardHeader />
          <div id="logout" style={{float: "right", position: "absolute", right: "30px", top: "15px"}}>
            <button onClick={props.handleLogout} id="logout">Logout</button> 
          </div>
          {/* <DashboardHome /> */}
          <Route exact path='/' component={DashboardPage}/>
          <Route path='/dashboard' component={DashboardPage}/>
          <Route path='/costs' component={CostsPage}/>
          <Route path='/appliances' component={AppliancesPage}/>
          <Route path='/usage' component={UsagePage}/>
          <Route path='/emissions' component={EmissionsPage}/>
        </div>
      </Router>
  )
}

export default Dashboard
