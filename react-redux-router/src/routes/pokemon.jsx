import { useLoaderData } from "react-router-dom";

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
  let print = {}
  if(data!== undefined){
    print = JSON.stringify(data) 
  }
  return <div className="w-full h-[40px] bg-amber-300">pokemon
  <p>{print}</p>
  </div>;
};

export default Pokemon;
