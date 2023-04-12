import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Header from "./components/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import JobAp from "./components/JobAp/JobAp";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import JobDetails from "./components/JobDetails/JobDetails";
import cartProductsLoader from "./components/Appliedget/appliedget";
import Applied from "./components/Applied/Applied";
import ErrorePage from "./components/Error/ErrorePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorePage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "/job",
        element: <Applied />,
        loader: cartProductsLoader
      },
      {
        path: "/status",
        element: <Statistics />,
        
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/JobDetails/:id",
        element: <JobDetails />,
        // loader: () => fetch(`jobs.json`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
