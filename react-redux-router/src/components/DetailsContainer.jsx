/* eslint-disable react/prop-types */
import PokeBall from "./../assets/pokeball.png";
import EvolutionChain from "./EvolutionChain";
import { Colors } from "../helpers/backgroundColor";
const DetailsContainer = ({
  name,
  id,
  types,
  stats,
  sprites,
  color: typeColor,
}) => {
  console.log(types);
  return (
    <div>
      <div
        className="curve flex flex-col py-6"
        style={{ "--bgColor": typeColor }}
      >
        <div className="w-full flex flex-row px-6 pb-4 justify-between">
          <h1 className="text-2xl capitalize font-bold">{name}</h1>
          <span className="text-lg">#{id.toString().padStart(3, 0)}</span>
        </div>
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
      <div className="flex flex-row justify-center space-x-8 my-8 capitalize">
        {types.map((type, index) => {
          return (
            <div
              key={index}
              className="flex items-center content-center font-normal w-[175px]  capitalize text-xl rounded-full md:text-xl"
              style={{ backgroundColor: Colors[type.type.name] }}
            >
              <h2 className="w-full px-6 py-[6px] text-center">
                {type.type.name}
              </h2>
            </div>
          );
        })}
      </div>
      <h3 className="text-md">{JSON.stringify(stats)}</h3>
      <EvolutionChain id={id} />
    </div>
  );
};

export default DetailsContainer;
