import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignInForm = props => {
	const history = useHistory();

	const userName = "abc@scanman.com";
	const password = "12345678";
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredPassword, setEneterdPassword] = useState("");
	const [correctCredentials, setCorrectCredentials] = useState(true);

	const formSubmitHandler = (event) =>{
		event.preventDefault();
		if(enteredUserName === userName){
			if(enteredPassword === password){
				setCorrectCredentials(true);
				props.Setvalidated(true);
				console.log("validate inside: "+true);
				history.push('/home');
			}
			else	setCorrectCredentials(false);
		}
		else	setCorrectCredentials(false);
	};

	const userNameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setEneterdPassword(event.target.value);
	};


	return <div>
		<form onSubmit = {formSubmitHandler}>
			<label>Username:</label><br />
			<input type = 'email' value ={enteredUserName} onChange ={userNameChangeHandler} />
			<br />
			<label>Password:</label><br />
			<input type = 'password' value ={enteredPassword} onChange ={passwordChangeHandler} />
			<br />
			{!correctCredentials && <p>Invalid UserName or Password!</p>}
			<button type='submit'>LogIn</button>
		</form>
	</div>
};

export default SignInForm;