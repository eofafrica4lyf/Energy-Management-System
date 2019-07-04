import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom';

import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import LogHeader from './LogHeader';


function LoginLogout(props) {
  return (
    <>
      <Router>
        <div style={{display: "flex", flexDirection: "column"}}>
          <LogHeader />
          <Route exact path="/" render={() => <LoginPage handleUserLogin={props.handleUserLogin}/>}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/signup" component={SignUpPage}/>
        </div>
      </Router>
    </>
  )
}

export default LoginLogout
