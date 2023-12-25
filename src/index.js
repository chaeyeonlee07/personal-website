import React from 'react';
import ReactDOM from 'react-dom';
import Index from './screens/index';
import About from './screens/about';
import Memory from './screens/memory';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Index />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <About />,
  },
  {
    path: "/memory",
    element: <Memory />,
    errorElement: <Memory />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);