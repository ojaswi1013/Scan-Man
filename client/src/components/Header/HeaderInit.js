import logo from '../../assets/logo1.svg'
import './Header.css';

const HeaderInit = props => {
	return<div className='contain'>
		<img src={logo} alt='Scan-Man' className='logo-style'/>
		<button className='btn'>Create account</button>
	</div>
};

export default HeaderInit;