import React from 'react';
import { 
  BrowserRouter as Router,
  Link
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
    </Router>
  );
}

export default App;
