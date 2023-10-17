// import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App.tsx'
import "./index.css";
import Stopwatch from "./pages/StopWatch";
import About from "./pages/About";
import Root from "./pages/Root.tsx";
import CountDown from "./pages/CountDown.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "stopwatch",
    element: <Stopwatch />,
  },
  {
    path: "countdown",
    element: <CountDown />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
