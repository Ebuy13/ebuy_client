import React, { useState } from "react";
import signinimage from "../76884837.jpg";

import Shop from "./shop"
import { useHistory } from "react-router-dom";
import {Route} from "react-router-dom";




const Login = (props) => {
	const history = useHistory();
	const registerFormStyle = {
		marginLeft: '2cm',
		width: "500px",
	};
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const signUpData = { email, password }
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify(signUpData),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const json = await response.json()
		console.log(json)
		if (!response.ok) {
			alert(json.message)
			setError(json.error)
		}
		if (response.ok) {
			
			setError(null)
			window.alert('The login was successful')
			console.log('user login success')
			history.push("/shop");
			window.location.reload();	
		}
	}

	return (
		<div className="body" style={registerFormStyle}>
			<div className="auth-form-container">
				<label htmlFor="Ebuy">Sign in here 🔐</label>
				<div className="form-container">
					<form className="Login-form" onSubmit={handleSubmit}>
						<label htmlFor="email">Email/Phone</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							placeholder="your username"
							id="email"
							name="email"
						/>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="*********"
							id="password"
							name="password"
						/>
						<button type="submit" >Sign In</button>
						<a href ="/Signup ">Already have an account? Sign in</a>
					</form>
					<div className="image-container" >
						<img
							src={signinimage}
							className="img-fluid"
							alt="Welcome to our eCommerce store!" />
						<button className="link-btn" onClick={() => props.onFormSwitch("register")}>

						</button>
					</div></div></div>
		</div>
	);
};

export default Login;
