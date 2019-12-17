import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

import Home from "./Home";
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
    <div className="App">

      <div className="rotas">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/peoples">
          Peoples
        </Route>
        <Route path="/planets">
          Planets
        </Route>
        <Route path="/films">
          Films
        </Route>
        <Route path="/species">
          Species
        </Route>
        <Route path="/vehicles">
          Vehicles
        </Route>
        <Route path="/starships">
          Starships
        </Route>
      </div>

      <NavBar />
    </div>
    </Router>
  );
}

export default App;
