import React from 'react'
import {Link} from "react-router-dom";

function LoginPage(props) {
  return (
    <div id="log-body">
        <main>
          <div id="login-form">

            <div id="user-login">
              <div>
                <form onSubmit={props.handleUserLogin}>
                  <h1>User Login</h1>
                  <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="email" name="email"/>
                  </div>
                  <div className="formgroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="password" name="password"/>
                  </div>
                  <div className="formgroup">
                    <input id="user-login" type="submit" style={{backgroundColor: "#1E2D52", color: "white"}}/>
                  </div>
                  <Link to="/signup" style={{display: "block", color: "white", margin: "auto", textAlign: "center"}}>Not registered yet? Sign Up</Link>
                </form>
              </div>
            </div>
            <div id="admin-login">
              <div>
                <form action="">
                  <h1>Admin Login</h1>
                  <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="email"/>
                  </div>
                  <div className="formgroup">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="password"/>
                  </div>
                  <div className="formgroup">
                    <input id="admin-login" type="submit" style={{color: "#1E2D52",}}/>
                  </div>
                </form>
              </div>
            </div>
            
          </div>
        </main>
    </div>
  )
}

export default LoginPage
