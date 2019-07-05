import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import LogHeader from "./LogHeader";

function LoginLogout(props) {
	console.log(props.isLoggedIn);

	return (
		<>
			<Router>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<LogHeader />
					<Route
						exact
						path="/"
						render={() =>
							props.isLoggedIn ? (
								<Redirect to="/dashboard" />
							) : (
								<LoginPage handleUserLogin={props.handleUserLogin} />
							)
						}
					/>
					<Route
						path="/login"
						render={() =>
							props.isLoggedIn ? (
								<Redirect to="/dashboard" />
							) : (
								<LoginPage handleUserLogin={props.handleUserLogin} />
							)
						}
					/>
					<Route path="/signup" component={SignUpPage} />
				</div>
			</Router>
		</>
	);
}

function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				false === true ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
}

export default LoginLogout;
