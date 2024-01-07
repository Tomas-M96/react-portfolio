import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import ErrorPage from "./pages/ErrorPage.tsx";
import About from "./components/About.tsx";
import RootView from "./pages/RootView.tsx";
import HomePage from "./components/HomeContent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <div>projects</div>,
      },
      {
        path: "/contact",
        element: <div>contact</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
