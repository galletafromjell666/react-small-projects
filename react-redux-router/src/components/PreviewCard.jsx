/* eslint-disable react/prop-types */
import { useGetPokemonByNameQuery } from "../services/pokeApi";
const PreviewCard = ({ name }) => {
  const { data } = useGetPokemonByNameQuery(name);
  //let print = {};
  if (data) {
    //print = JSON.stringify(data);
    console.log(data)
  }
  return (
    <div>
      {data ? <div>
        <img src={data.sprites.other.home.front_default}/>
        <div>{data.types.map(type => {
          return <p key={type.slot}>{type.type.name}</p>
        })}</div>
        <h1>{data.name}</h1>
      </div> : <h1>Something went wrong</h1>}
    </div>
  );
};

export default PreviewCard;
