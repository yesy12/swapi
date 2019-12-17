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
        setResults([
            data.results,
        ]);
    },[data,setCount,setNext,setPrevious,setResults])

    const RenderRow = (info) => {
        console.log(info[0])
    }

    return(
        <div className="Peoples">
            <h1>Peoples</h1>
            
            <span>
                Quantidade de Pessoas: {count}
            </span> <br/><br/>

            { results.map(RenderRow) }

            {/* {JSON.stringify(results)} */}




            {/* <table>
                <thead>
                    <th>
                        Name
                    </th>
                    <th>
                        Height
                    </th>
                    <th>
                        Mass
                    </th>
                    <th>
                        Hair Color
                    </th>
                    <th>
                        Skin Color
                    </th>
                    <th>
                        Eye Color
                    </th>
                    <th>
                        Homeworld
                    </th>
                    <th>
                        Films
                    </th>
                    <th>
                        Vehicles
                    </th>
                    <th>
                        Starships
                    </th>
                    <th>
                        Created
                    </th>
                    <th>
                        Edited
                    </th>                                        
                </thead>

                <tbody>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>  */}

            {/* {results.map( info => { console.log(info) } )} */}
            

        </div>
    );
}

export default Peoples;