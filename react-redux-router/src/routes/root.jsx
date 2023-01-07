import { Outlet, useLoaderData } from "react-router-dom";

export const rootLoader = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`);
 // console.log(response);
  const pokm = await response.json();
 // console.log(pokm);
  return { pokm };
};

const Root = () => {
  const { pokm: pokmData } = useLoaderData();
  return (
    <div className="w-full h-screen bg-slate-500">
      <div className="bg-stone-400 w-full h-10">root header</div>
      <div>
        {pokmData.results.length ? (
          <ul>
            {pokmData.results.map((poke) => {
              return <h1 key={poke.name}> {poke.name}</h1>;
            })}
          </ul>
        ) : (
          <h1>Null</h1>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
