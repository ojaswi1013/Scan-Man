import SignInForm from '../components/SigninForm';

const SignIn = props => {
	return <div>
		<SignInForm Setvalidated={props.setvalidated}/>
	</div>
};

export default SignIn;