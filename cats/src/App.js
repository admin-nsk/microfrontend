import React from "react";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

const router = createBrowserRouter([
    {
        path: "/",
        element: <RandomCat />,

    },
    {
        path: "cat/:greeting",
        element: <GreetingCat />,
    }
]);

function App({ history = defaultHistory }) {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;