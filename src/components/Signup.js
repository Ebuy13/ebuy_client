import signupimage from "../6333040.jpg";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
	const history = useHistory();
	const registerFormStyle = {
		marginLeft: '2cm',
		width: "300px",
	};
	const labelStyle = {
		color: "#e03d0b",
	};
	const [username, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [Cpassword, setCPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [error, setError] = useState(null);
	const [register, setRegister] = useState(null);
	const handleSubmit = async (e) => {
		// prevent refresh
		e.preventDefault();
		if (password === Cpassword) {
			const userID = Math.floor(Math.random() * 90000) + 10000;
			const userData = { userID, email, username, password, address, phone }
			const response = await fetch('/api/signUp', {
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const json = await response.json()
			if (!response.ok) {
				alert('The login was not successful')
				setError(json.error)
			}
			if (response.ok) {
				setError(null)
				alert('The login was successful \n Please signup to continue')
				console.log('user data added')
				history.push("/Login");
				window.location.reload();
			}
			console.log(email);
		}
		else {
			window.alert('The 2 passwords do not match, try again')
		}

	}
	useEffect(() => {
		const fetchRegisterData = async () => {
			const response = await fetch('/api/signUp')
			const json = await response.json()
			if (response.ok) {
				setRegister(json)
			}
		}
		fetchRegisterData()
	}, [])
	return (
		<div className="auth-form-container" style={registerFormStyle}>
			<label htmlFor="Ebuy" style={labelStyle}>Sign up here ✍🏻 </label>
			<form className="register-form" style={registerFormStyle} onSubmit={handleSubmit}>
				<label htmlFor="Name" style={labelStyle}>Name</label>
				<input
					value={username}
					onChange={(e) => setName(e.target.value)}
					type="Name"
					placeholder="Your Name"
					id="Name"
					name="Name"
				/>
				<label htmlFor="Phone" style={labelStyle}>Phone</label>
				<input
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					type="number"
					placeholder="Your Contact number"
					id="Phone"
					name="Phone"
				/>
				<label htmlFor="Address" style={labelStyle}>Address</label>
				<input
					value={address}
					onChange={(e) => setAddress(e.target.value)}
					type="String"
					placeholder="Your Residential Adress"
					id="Address"
					name="Address"
				/>
				<label htmlFor="email" style={labelStyle}>Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="your emailid"
					id="email"
					name="email"
				/>
				<label htmlFor="password" style={labelStyle}>Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="*********"
					id="password"
					name="password"
				/>
				<label htmlFor="Cpassword" style={labelStyle}>Confirm Password</label>
				<input
					value={Cpassword}
					onChange={(e) => setCPassword(e.target.value)}
					type="password"
					placeholder="*********"
					id="Cpassword"
					name="Cpassword"
				/>
				<button type="submit" style={{ backgroundColor: '#095254', color: 'white' }}>Sign Up</button>
				<div className="link-btn-container">
					
						<a href ="/Login ">Already have an account? Sign in</a>
					
				</div>
			</form>
			<div className="image-container">
				<img src={signupimage} alt="Welcome to our eCommerce store!" />
			</div>
		</div>
	);
};

export default Signup;
