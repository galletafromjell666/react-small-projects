import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-full h-screen bg-slate-500">
      <div className="bg-stone-400 w-full h-10">root header</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
