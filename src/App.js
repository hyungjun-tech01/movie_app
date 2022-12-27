import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },  
    ]  
  },
]);

function App(){
  return( 
    <RouterProvider router={router} />
  );
}
export default App;