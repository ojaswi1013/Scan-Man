import Drop from '../components/Drop';
import { useHistory } from 'react-router-dom';

const Home = props => {
	const history = useHistory();

	return<div>
		{history.push('/home/drop-file')}
	</div>
};

export default Home;