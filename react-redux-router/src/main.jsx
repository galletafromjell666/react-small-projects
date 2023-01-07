import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { rootLoader } from "./routes/root";
import { ErrorPage } from "./routes/error-page";
import Pokemon, { pokemonLoader } from "./routes/pokemon";
import Index from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    id: "root",
    children: [
      { index: true, element: <Index /> },
      {
        path: "pokemon/:pokemonName",
        element: <Pokemon />,
        loader: pokemonLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
