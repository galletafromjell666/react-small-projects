/* eslint-disable react/prop-types */
import { useGetEvolutionChainQuery } from "../services/pokeApi";
const EvolutionChain = ({ id }) => {
  const { data } = useGetEvolutionChainQuery(id);
  if (data) console.log(`evo`, data);
  return <div>EvolutionChain</div>;
};

export default EvolutionChain;
