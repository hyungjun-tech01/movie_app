import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
        path: "about",
        element: <About />,
  },  
  {
    path: "movie_detail",
    element: <Detail />,
},  
]);


function App(){
  return( 
    <RouterProvider router={router} />
  );
}
export default App;