import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigator from "./routes/Navigator";

// react-router-dom 6 버전 사용 , createBrowserRouter , RouterProvider 사용
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
    <div>
      <Navigator />
      <RouterProvider router={router} />
    </div>
  );
}
export default App;