import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import DashboardPage from './components/Body/DashboardPage/DashboardPage';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import CostsPage from './components/Body/CostsPage/CostsPage';
import AppliancesPage from './components/Body/AppliancesPage/AppliancesPage';
import UsagePage from './components/Body/UsagePage/UsagePage';
import EmissionsPage from './components/Body/EmissionsPage/EmissionsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  const handleLogout= (e) => {
    console.log("Logout button clicked")
    localStorage.clear();
    setIsLoggedIn(false);
  }
  
  useEffect(() => {
    console.log("Entered useEffect")
    localStorage.userID = 2;
    setIsLoggedIn(true);

  }, [setIsLoggedIn])

  
    return (
      // {console.log(isLoggedIn)}
      (!isLoggedIn) ?
      <>
      <p>You are not logged in.</p>
      </>
                      :
      <Router>
        <React.Fragment >
          <Header />
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