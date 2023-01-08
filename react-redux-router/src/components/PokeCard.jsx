/* eslint-disable react/prop-types */
const PokeCard = ({ name, id, types, stats, sprites }) => {
  return (
    <div>
      <div className="bg-stone-100 flex flex-col content-center items-center h-[200px]">
        <img src={sprites.other.home.front_default} />
        <span className="text-lg">{id}</span>
        <h1 className="text-2xl font-bold">{name}</h1>
        {types.map((type, index) => {
          return <h2 key={index}>{type.name}</h2>;
        })}
        <h3 className="text-md">{JSON.stringify(stats)}</h3>
      </div>
    </div>
  );
};

export default PokeCard;
