import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';


import {signupContext, signContext} from './components/Helpers'

// import LoginLogout from './components/LoginLogout/LoginLogout';
// import Dashboard from './components/dashboard/Dashboard';

import DashboardHeader from './components/dashboard/Header/DashboardHeader';
import DashboardPage from './components/dashboard/Body/DashboardPage/DashboardPage';

import CostsPage from './components/dashboard/Body/CostsPage/CostsPage';
import AppliancesPage from './components/dashboard/Body/AppliancesPage/AppliancesPage';
import UsagePage from './components/dashboard/Body/UsagePage/UsagePage';
import EmissionsPage from './components/dashboard/Body/EmissionsPage/EmissionsPage';

// import {Redirect} from 'react-router-dom';
import LoginPage from './components/LoginLogout/LoginPage';
import SignUpPage from './components/LoginLogout/SignUpPage';
import LogHeader from './components/LoginLogout/LogHeader';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([{email: "toluadesina", password: "qwerty"}]);

  const handleUserSignin = (e) => {

    // const userData = localStorage.getItem('user')
    // if(!userData) return
    
      e.preventDefault()
      console.log(user);
      const {email, password} = e.target.elements
      const emailValue = email.value
      const passwordValue = password.value
      
      console.log(user, emailValue, user[0].email, passwordValue, user[0].password, (emailValue === user[0].email && passwordValue === user[0].password));
      if(emailValue === user[0].email && passwordValue === user[0].password) {
        setIsLoggedIn(!isLoggedIn);
      }
      
  }
  
  const handleLogout= (e) => {
    console.log("Logout button clicked");
    console.log(e);
    localStorage.clear();
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    // window.location.href = "/login";
  }

  const handleUserLogin = (e) => {
    e.preventDefault();
    const {email, firstname, lastname, password} = e.target.elements
   
    console.log(email.value, firstname.value, lastname.value, password.value);
    const emailValue = email.value
    const firstNameValue = firstname.value
    const lastNameValue = lastname.value
    const passwordValue = password.value

     const userData = {
       firstname: firstNameValue,
       lastname: lastNameValue,
       email: emailValue,
       password: passwordValue
     }

     setUser([...user, userData])
     console.log(user, [...user, userData]);
     localStorage.setItem('user', JSON.stringify(userData))    
  }

  // if (isLoggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }
  

    return (
    <>
      {console.log(isLoggedIn)}
      <signupContext.Provider value={handleUserLogin}>
        {
          (isLoggedIn) 
          ?
          <>
            <div style={{display: "flex"}}>
              <DashboardHeader />
              <div id="logout" style={{float: "right", position: "absolute", right: "30px", top: "15px"}}>
                <button onClick={handleLogout} id="logout">Logout</button> 
              </div>
              {/* <DashboardHome /> */}
              <Route exact path='/' component={DashboardPage}/>
              <Route path='/dashboard' component={DashboardPage}/>
              <Route path='/costs' component={CostsPage}/>
              <Route path='/appliances' component={AppliancesPage}/>
              <Route path='/usage' component={UsagePage}/>
              <Route path='/emissions' component={EmissionsPage}/>
            </div>
          </>
          
          :
          <signContext.Provider value={handleUserSignin}>
            {/* <LoginLogout isLoggedIn={isLoggedIn}/> */}
            <div style={{display: "flex", flexDirection: "column"}}>
              <LogHeader />
              <Route exact path="/" render={() => (isLoggedIn ? <Redirect to="/dashboard"/> :<LoginPage handleUserLogin={handleUserLogin}/>)}/>
              <Route path="/login" render={() => (isLoggedIn ? <Redirect to="/dashboard"/> :<LoginPage handleUserLogin={handleUserLogin}/>)}/>
              <Route path="/signup" component={SignUpPage}/>
            </div>
          </signContext.Provider>
        }
      </signupContext.Provider>
      
    </>
    );
}

export default App;