import React, { useState, useEffect } from "react";
import '../App.css';


function Fwine ({ firstName }) {
    const [wineList, setWineList] = useState();
    const [typeOfWine, setTypeOfWine] = useState('reds');
    useEffect(()=> {
        fetch(`https://api.sampleapis.com/wines/${typeOfWine}`)
        .then((response) => response.json())
        .then((data) => setWineList(data))
        .catch(console.error);
    }, [typeOfWine])


    return (
        <div>
        <h1>Wine List (F)</h1>
        <p>Hello {firstName}</p>
        <button onClick={()=> setTypeOfWine('reds')}>REDS</button>
        <button onClick={()=> setTypeOfWine('whites')}>WHITES</button>
        <button onClick={()=> setTypeOfWine('sparkling')}>SPARKLING</button>
        <button onClick={()=> setTypeOfWine('rose')}>ROSE</button>
        <button onClick={()=> setTypeOfWine('dessert')}>DESSERT</button>
        <button onClick={()=> setTypeOfWine('port')}>PORT</button>

       {!wineList
       ?
       <h2>Loading...</h2>
       :
        <>
        <h2 className="list"> Wines </h2>
        <p class='display-list'>
        {wineList.map((wine) => {
            return <p key={wine.id}> {wine.winery} </p>
        })}  
        </p> 
        </>
       }
        </div>
    );
}

export default Fwine;