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
          {console.log(validated)}
          {validated && <Home />}
          {!validated && <h1>Kindly go back and SignIn first</h1>}
        </Route>
        <Route path="/home/drop-file" exact>
          {console.log(validated)}
          {validated && <Drop setFileSent={setFileSent} fileSent={fileSent}/>}
          {!validated && <h1>Kindly go back and SignIn first</h1>}
        </Route>
        <Route path="/home/drop-result" exact>
          {console.log("inside the drop-result path")}
          {validated && <Result fileSent={fileSent}/>}
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
