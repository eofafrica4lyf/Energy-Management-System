import React from 'react';
import {NavLink} from "react-router-dom";


function LogHeader() {
  return (
    <div id='log-header' style={{display: 'flex', flexDirection: 'column', flex: '1 0 0', backgroundColor: '#181745', padding: '1em 0 1em 1em'}}>
      <div id="logheader" style={{height: "5vh", backgroundColor: "#181645", display: "flex", flexDirection: "row", paddingBottom: "3em"}}>
        <div id='log-logo' style={{flex:"1 0 10%", fontSize: '27px', display: "inline", padding: "0.3em"}}>
            <a href="/" style={{textDecoration: "none", color: "white"}}>
            ENERGON 
            <span style={{color: '#e6526d', fontFamily: 'Nunito Sans Light, sans-serif', fontWeight:'lighter', fontSize: '15px'}}>  BETA</span>
            </a>
        </div>
        <nav id="log-nav" style={{flex: "1 0 90%"}}>
          <ul style={{display: "flex", justifyContent: "flex-end", paddingRight: "3em"}}>
            <li id="login"><NavLink activeClassName='active' to="/login">Login</NavLink></li>
            <li id="logout"><NavLink activeClassName='active' to="/logout">Sign Up</NavLink></li>
          </ul>
        </nav>
      </div>
      
    </div>
  )
}

export default LogHeader
