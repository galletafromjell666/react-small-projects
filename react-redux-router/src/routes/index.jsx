import { useGetAllPokemonQuery } from "../services/pokeApi";
import { Link } from "react-router-dom";
import PreviewCard from "../components/PreviewCard";
const index = () => {
  const { data : pokmData } = useGetAllPokemonQuery();
  //console.log(pokmData)
  return (
    <div className="w-full h-screen bg-green-300">
      <h1>INDEX</h1>
      <div>
        {pokmData  ? (
          <ul>
            {pokmData.results.map((poke, index) => {
              return (
                <li key={index} className="">
                  <Link to={`pokemon/${poke.name}`}>
                   <PreviewCard {...poke}/>
                  </Link>
                </li>
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
