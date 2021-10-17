import Drop from '../components/Drop';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header/HeaderAfter';

const Home = props => {
	const history = useHistory();

	return<div>
		<Header />
		{history.push('/home/drop-file')}
	</div>
};

export default Home;