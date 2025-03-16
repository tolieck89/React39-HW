import "./SmileCard.css"
import React, { useState } from 'react';
 

export default function SmileCard({smileUnit}){
    const [count, setCount] = useState(0);
    const [countObs, incCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
        smileUnit.count = count;
        console.log(smileUnit.count);
    }

    return (
        <div className="smileUnit">
            <h3>{smileUnit.title}</h3>
            <div>{smileUnit.item}</div>
            <article>{smileUnit.descr}</article>
            <div className="buttonBar">
            <div>❤ {count} </div>
            <button onClick={increment}>Vote </button>
            
            </div>
        </div>
    )
}