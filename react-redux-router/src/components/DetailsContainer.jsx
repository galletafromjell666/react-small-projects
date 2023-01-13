/* eslint-disable react/prop-types */
import PokeBall from "./../assets/pokeball.png";
import EvolutionChain from "./EvolutionChain";
const DetailsContainer = ({
  name,
  id,
  types,
  stats,
  sprites,
  color: typeColor,
}) => {
  return (
    <div>
      <div
        className="curve flex flex-col content-center items-center"
        style={{'--bgColor': typeColor}}
      >
        <div className="relative w-full h-[400px]">
          <img
            className="absolute z-50 m-auto left-0 right-0 h-full"
            src={sprites.other["official-artwork"].front_default}
          />
          <img
            className="absolute z-10 m-auto bottom-0 left-0 right-0 spining-pokeball opacity-10 h-[95%]"
            src={PokeBall}
          />
        </div>

        
      </div>
      <div>
        <span className="text-lg">{id}</span>
        <h1 className="text-2xl font-bold">{name}</h1>
        {types.map((type, index) => {
          return <h2 key={index}>{type.name}</h2>;
        })}
      </div>
      <h3 className="text-md">{JSON.stringify(stats)}</h3>
      <EvolutionChain id={id} />
    </div>
  );
};

export default DetailsContainer;
