import { smilesList } from "../smiles";
import SmileCard from "./SmileCard";

    export default function UserCards(){

    return (
        <div>
            {smilesList.map(smile => (
                <SmileCard key={smile.id} smileUnit={smile} />
               
           ))}
        </div>
    )

    }