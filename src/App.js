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

      <div className="rotas">
        <Route path="/people">
          People
        </Route>
      </div>
    </Router>
  );
}

export default App;
