import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import DashboardPage from './components/Body/DashboardPage/DashboardPage';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import CostsPage from './components/Body/CostsPage/CostsPage';
import AppliancesPage from './components/Body/AppliancesPage/AppliancesPage';
import UsagePage from './components/Body/UsagePage/UsagePage';
import EmissionsPage from './components/Body/EmissionsPage/EmissionsPage';

function App() {
  return (
    <Router>
      <React.Fragment >
        <Header />
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