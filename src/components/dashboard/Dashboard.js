import React from 'react';
import { Route } from 'react-router-dom';



function Dashboard(props) {
  return (

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

  )
}

export default Dashboard
