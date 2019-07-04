import React, { useState, useEffect } from 'react';
import './App.css';
import DashboardHeader from './components/dashboard/Header/DashboardHeader';
import DashboardPage from './components/dashboard/Body/DashboardPage/DashboardPage';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import CostsPage from './components/dashboard/Body/CostsPage/CostsPage';
import AppliancesPage from './components/dashboard/Body/AppliancesPage/AppliancesPage';
import UsagePage from './components/dashboard/Body/UsagePage/UsagePage';
import EmissionsPage from './components/dashboard/Body/EmissionsPage/EmissionsPage';
import LoginPage from './components/LoginLogout/LoginPage';
import LogoutPage from './components/LoginLogout/LogoutPage';
import LogHeader from './components/LoginLogout/LogHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout= (e) => {
    console.log("Logout button clicked")
    localStorage.clear();
    setIsLoggedIn(false);
  }
  
  useEffect(() => {
    // console.log("Entered useEffect")
    // localStorage.userID = 2;
    // setIsLoggedIn(true);

  }, [setIsLoggedIn])

  
    return (
      // {console.log(isLoggedIn)}
      (!isLoggedIn) ?
      <>
      <Router>
        <div style={{display: "flex", flexDirection: "column"}}>
          <LogHeader />
          {/* <p>You are not logged in.</p> */}
          <Route exact path="/" component={LoginPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/logout" component={LogoutPage}/>
        </div>
      </Router>
      
      </>
                      :
      <Router>
        <React.Fragment >
          <DashboardHeader />
          <div id="logout" style={{float: "right", position: "absolute", right: "30px", top: "15px"}}>
            <button onClick={handleLogout} id="logout">Logout</button> 
          </div>
          {/* <DashboardHome /> */}
          <Route exact path='/dashboard' component={DashboardPage}/>
          <Route path='/costs' component={CostsPage}/>
          <Route path='/appliances' component={AppliancesPage}/>
          <Route path='/usage' component={UsagePage}/>
          <Route path='/emissions' component={EmissionsPage}/>
        </React.Fragment>
      </Router>
    );
}

export default App;