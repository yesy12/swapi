import React, { useState, useEffect } from "react";
import axios from "axios";

const Peoples = () => {
    const [data,setData] = useState([]);
    const [previous,setPrevious] = useState();
    const [next,setNext] = useState();
    const [count,setCount] = useState(0);
    const [results,setResults] = useState();

    const link = "https://swapi.co/api/people/?format=json";

    useEffect(()=>{
        axios
         .get(link)
         .then((dados)=>{
            let {data} = dados;
            setData(data);
            let {count} = data;
            
            let {previous} = data;
            let {next} = data;

            let {results} = data;
        })

    },[setData,link])

    useEffect(()=>{
        setCount(data.count);
        setNext(data.next);
        setPrevious(data.previous);
        setResults(data.results);
    },[data,setCount,setNext,setPrevious,setResults])

    return(
        <div className="Peoples">
            <h1>Peoples</h1>
            {JSON.stringify(results)}
        </div>
    );
}

export default Peoples;