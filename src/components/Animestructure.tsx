

interface AnimeItem {
  Name: string;
  image: string; 
  favouritechar: string;
  Popularity: number;
  Episodes: number;
  Plot: string;
}


interface AnimestructureProps {
  item: AnimeItem; 
}


function Animestructure(props: AnimestructureProps) {
  return (
    <>
      <h1>{props.item.Name}</h1>
      <div className="second-flex">
        <div>
          <img src={props.item.image} className="first-img" alt={`${props.item.Name} image`} />
        </div>
        <div>
          <img src={props.item.favouritechar} className="first-img" alt={`${props.item.favouritechar} character`} />
        </div>
      </div>
      <div className="test">
        <h2>Popularity: {props.item.Popularity}</h2>
        <h2>Episodes: {props.item.Episodes}</h2>
        <h3>Plot</h3>
        <p>{props.item.Plot}</p>
      </div>
    </>
  );
}

export default Animestructure;