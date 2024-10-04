
import Data from "./Data";
import Animestructure from "./Animestructure";
export default function Animecard(){
    const cards = Data.map(item => {
        return <Animestructure  key = {item.Name}
        item = {item} />
    }) 


    return (
        <div className="cards">
       {cards}
        </div>
    )
}