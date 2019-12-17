import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from "./Home";
import NavBar from './components/NavBar';

function App() {
  const Peoples = () => {
    return <h1>Peoples</h1>;
  }

  const Planets = () => {
    return <h1>Planets</h1>;
  }

  const Films = () => {
    return <h1>Films</h1>;
  }

  const Species = () => {
    return <h1>Species</h1>;
  }

  const Vehicles = () => {
    return <h1>Vehicles</h1>;
  }

  const Starships = () => {
    return <h1>Starships</h1>;
  }
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/peoples" exact component={Peoples} />
          <Route path="/planets" exact component={Planets} />
          <Route path="/films" exact component={Films} />
          <Route path="/species" exact component={Species} />
          <Route path="/vehicles" exact component={Vehicles} />
          <Route path="/starships" exact component={Starships} />
        </Switch>
      </div>
      
    </Router>
  );

}

export default App;
