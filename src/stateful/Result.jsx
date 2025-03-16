import { smilesList } from "../smiles";
import "./SmileCard.css"
import React, { useState } from 'react';




    export default function Result(){

        const winner =  (smilesList.reduce((acc, smile) => {
            return smile.count > acc.count ? smile : acc;
        }, { count: 0 }));

        const [isHidden, setIsHidden] = useState(true);

        const switchVisability = () => {
            setIsHidden(prevState => !prevState);
        };
        
        console.log(winner);

    return (
        <div className="resultBlock">
            <h3  className={isHidden ? "hidden" : ""}>{winner.title} is the winner!</h3>
            <button onClick={switchVisability}>{isHidden ? "View result": "Hide result" }</button>

        </div>
    )

    }