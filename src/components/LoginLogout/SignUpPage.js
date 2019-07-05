import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {signupContext} from '../Helpers'


function SignUpPage() {
  const handleUserLogin = useContext(signupContext)
  
  return (
    <div id="signup-body">
        <main>
          <div id="signup-form">

            <div id="user-login">
              <div>
                <form onSubmit={handleUserLogin}>
                  <h1>User SignUp</h1>
                  <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="email" name="firstname"/>
                  </div>
                  <div className="formgroup">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="email" name="lastname"/>
                  </div>
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
                  <Link to="/login" style={{display: "block", color: "white", margin: "auto", textAlign: "center"}}>Log In</Link>
                </form>
              </div>
            </div>            
          </div>
        </main>
    </div>
  )
}

export default SignUpPage
