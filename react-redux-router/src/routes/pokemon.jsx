import { useLoaderData } from "react-router-dom";
import { store } from "../store";
import { pokeApi } from "../services/pokeApi";
import PokeCard from "../components/PokeCard";

export const pokemonLoader = async ({ params }) => {
  console.log(params)
  const apiPromise = store.dispatch(pokeApi.endpoints.getPokemonByName.initiate(params.pokemonName));
  try {
    const response = await apiPromise;
   // console.log(response.data);
    return response;
  } catch (e) {
    console.log(`error `, e);
  }
};
const Pokemon = () => {
  const { data } = useLoaderData();
  console.log(data)
  return (
    <div className="w-full h-[40px] bg-amber-300">
      pokemon
      {data ? <PokeCard {...data} /> : <h1>error u.u</h1>}
    </div>
  );
};

export default Pokemon;
