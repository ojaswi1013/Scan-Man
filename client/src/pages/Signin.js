import SignInForm from '../components/SigninForm';
import Header from '../components/Header/HeaderInit';
import SideImg from '../assets/sideimg.png';
import './Signin.css'; 

const SignIn = props => {
	return <div>
		<Header />
		<div className='form-container'>
		<img src={SideImg} alt='SideImage' className='side-image'/>
		<SignInForm Setvalidated={props.setvalidated}/>
		</div>
	</div>
};

export default SignIn;