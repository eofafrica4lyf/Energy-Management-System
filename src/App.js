import React, { useState, useEffect } from 'react';
import './App.css';

import LoginLogout from './components/LoginLogout/LoginLogout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  
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
    console.log(e);
  }
  
  useEffect(() => {
    // console.log("Entered useEffect")
    // localStorage.userID = 2;
    // setIsLoggedIn(true);

  }, [setIsLoggedIn])

  
    return (<>
      {console.log(isLoggedIn)}
      {
        (isLoggedIn) 
        ?
        <Dashboard handleLogout={handleLogout}/>
        :
        <LoginLogout handleUserLogin={handleUserLogin}/>
      }
      </>
    );
}

export default App;