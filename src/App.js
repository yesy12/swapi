import React from 'react';
import { 
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Swapi</h1>

        <p>
          Informações tiradas deste <a href="https://swapi.co" target="_blank">site.</a>
        </p>
      </div>

      <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/peoples">Peoples</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/films">Films</Link>
            </li>            
            <li>
              <Link to="/species">Species</Link>
            </li>            
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/starships">
                Starships
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="rotas">
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

    </Router>
  );
}

export default App;
