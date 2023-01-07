import { useRouteLoaderData, Link } from "react-router-dom";
const index = () => {
  const { pokm: pokmData } = useRouteLoaderData(`root`);
  return (
    <div className="w-full h-screen bg-green-300">
      <h1>INDEX</h1>
      <div>
        {pokmData.results.length ? (
          <ul>
            {pokmData.results.map((poke) => {
              return (
                <div key={poke.name} className="h-[35px]">
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
