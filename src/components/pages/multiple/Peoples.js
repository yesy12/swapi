import React, { useState, useEffect } from "react";
import axios from "axios";

const Peoples = () => {
    const [data,setData] = useState([]);
    const [previous,setPrevious] = useState();
    const [next,setNext] = useState();
    const [count,setCount] = useState(0);
    const [results,setResults] = useState([]);

    const link = "https://swapi.co/api/people/?format=json";

    useEffect(()=>{
        axios
         .get(link)
         .then((dados)=>{
            let {data} = dados;
            setData(data);
         })
         .catch( (error) => {
            console.log(error);
         })

    },[setData,link])

    useEffect(()=>{
        setCount(data.count);
        setNext(data.next);
        setPrevious(data.previous);

        let {results} = data;

        let teste = data.results

        console.log(teste);
        // setResults(data.results)
    },[data,setCount,setNext,setPrevious,setResults])

    const RenderRow = (info) => {
        console.log(info);
    }

    return(
        <div className="Peoples">
            <h1>Peoples</h1>
            
            <span>
                Quantidade de Pessoas: {count}
            </span> <br/><br/>


            {/* {JSON.stringify(results)} */}

            {/* { results } */}
            {/* {console.log(results)} */}
            {/* {results.map( info => { console.log(info) } )} */}
            

        </div>
    );
}

export default Peoples;