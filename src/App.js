import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { EditUser } from "./components/EditUser";
import { AddUser } from "./components/AddUser";

import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <div className="App">
     <div style={{maxWidth:"30rem", margin:"4rem auto"}}>
    <GlobalProvider>
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add" component={AddUser} />
          <Route path="/edit/:id" component={EditUser} />
          
        </Switch>
      </Router>
    </GlobalProvider>
     
     </div>
      
    </div>
  );
}

export default App;
