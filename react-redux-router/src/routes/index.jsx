import { useGetAllPokemonQuery } from "../services/pokeApi";
import { Link } from "react-router-dom";
const index = () => {
  const { data : pokmData } = useGetAllPokemonQuery();
  console.log(pokmData)
  return (
    <div className="w-full h-screen bg-green-300">
      <h1>INDEX</h1>
      <div>
        {pokmData  ? (
          <ul>
            {pokmData.results.map((poke) => {
              return (
                <div key={poke.id} className="h-[35px]">
                  <Link to={`pokemon/${poke.name}`}>
                    <h1> {poke.name}</h1>
                  </Link>
                </div>
              );
            })}
          </ul>
        ) : (
          <h1>Null</h1>
        )}
      </div>
    </div>
  );
};

export default index;
