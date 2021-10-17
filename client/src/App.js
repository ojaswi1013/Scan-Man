import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import Error from './pages/Error';
import Drop from './components/Drop';
import Result from './components/Result';

function App() {
  const [validated, setValidated] = useState(false);
  const [fileSent, setFileSent] = useState(false);
  const [response, setResponse] = useState();

  /*const setValidatedTrue = () => {
    setValidated(true);
  };*/

  return (
    <div className>

      <Switch>
        <Route path="/" exact>
          <SignIn setvalidated={setValidated}/>
        </Route>
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/home/drop-file" exact>
          <Drop setFileSent={setFileSent} fileSent={fileSent} setresponse={setResponse}/>
        </Route>
        <Route path="/home/drop-result" exact>
          <Result fileSent={fileSent} res={response}/>
        </Route>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
