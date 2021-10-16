import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Error from './pages/Error';
import Drop from './components/Drop';
import Result from './components/result';

function App() {
  const [validated, setValidated] = useState(false);

  /*const setValidatedTrue = () => {
    setValidated(true);
  };*/

  return (
    <div className="App">

      <Switch>
        <Route path="/" exact>
          <SignIn setvalidated={setValidated}/>
        </Route>
        <Route path="/home" exact>
          {console.log(validated)}
          {validated && <Home />}
          {!validated && <h1>Kindly go back and SignIn first</h1>}
        </Route>
        <Route path="/home/drop-file" exact>
          {console.log(validated)}
          {validated && <Drop />}
          {!validated && <h1>Kindly go back and SignIn first</h1>}
        </Route>
        <Route path="/home/drop-result" exact>
          {console.log(validated)}
          {validated && <Result />}
          {!validated && <h1>Kindly go back and SignIn first</h1>}
        </Route>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
