import { Link, Outlet } from "react-router-dom";


export const rootLoader = async () => {
  //first gen includes 151 pkm
  /*
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`);
  // console.log(response);
  const pokm = await response.json();
  // console.log(pokm);
  return { pokm }; */
 
};

const Root = () => {
  return (
    <div className="w-full h-screen bg-slate-500">
      <div className="bg-stone-400 w-full h-10">
        root header
        <Link to={`/`}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Go Home
          </button>
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
