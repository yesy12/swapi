import React from "react";
import { 
    Link,
} from "react-router-dom";

const NavBar = () => {
    return(
        <div className="nav">
            <Link to="/">
                <h1>Swapi</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/peoples">
                            Peoples
                        </Link>
                    </li>

                    <li>
                        <Link to="/planets">
                            Planets
                        </Link>
                    </li>

                    <li>
                        <Link to="/films">
                            Films
                        </Link>
                    </li> 

                    <li>
                        <Link to="/species">
                            Species
                        </Link>
                    </li>

                    <li>
                        <Link to="/vehicles">
                            Vehicles
                        </Link>
                    </li>

                    <li>
                        <Link to="/starships">
                            Starships
                        </Link>
                    </li>

                </ul>
            </nav>
      </div>
    )
}

export default NavBar;