

function Animestructure(props) {
  return (
    <>
     <h1>{props.item.Name}</h1>
        <div className="second-flex">
        <div><img src={props.item.image} className="first-img"></img> </div>    
        <div><img src={props.item.favouritechar}  className="first-img"></img></div>    
        </div>
        <div className="test">
            <h2>Popularity : {props.item.Popularity}</h2>
            <h2>Episodes : {props.item.Episodes}</h2>
            <h3>Plot</h3>
           
            <p>{props.item.Plot}</p>
            </div>
           
    </>
  )
}

export default Animestructure