import { useLoaderData } from "react-router-dom";
import PokeCard from "../components/PokeCard";

export const pokemonLoader = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );
  const singlePkm = await response.json();
  // console.log(pokm);
  return { singlePkm };
};
const Pokemon = () => {
  const { singlePkm: data } = useLoaderData();
  return <div className="w-full h-[40px] bg-amber-300">pokemon
  {data ? <PokeCard {...data}/> : <h1>error u.u</h1>}
  
  </div>;
};

export default Pokemon;
