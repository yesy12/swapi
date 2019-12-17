import React, { useState, useEffect } from "react";
import axios from "axios";

const Peoples = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        setData([4.4,35.34,42.234]);
    },[setData])

    return(
        <div className="Peoples">
            <h1>Peoples</h1>
            {JSON.stringify(data)}
        </div>
    );
}

export default Peoples;