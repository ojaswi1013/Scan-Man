import logo from '../../assets/logo1.svg'
import './HeaderAfter.css';

const HeaderAfter = props => {
	return<div className='contain'>
		<img src={logo} alt='Scan-Man' className='logo-style'/>
		<button className='btn'>Sign Out</button>
	</div>
};

export default HeaderAfter;