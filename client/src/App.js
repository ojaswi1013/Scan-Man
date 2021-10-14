import './App.css';
import Drop from './components/Drop';
import Submit from './components/Submit';

function App() {
  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="App">
      <Drop />
      <Submit onClickHandler = {onSubmit} />
    </div>
  );
}

export default App;
