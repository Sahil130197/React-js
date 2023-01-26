import { createBrowserRouter } from "react-router-dom";
import HeaderCompo from "./commonCompo/header";
import HomeCompo from "./Home.jsx";
import About from "./about.jsx";


const MainRouter = createBrowserRouter([
    {
      path: "/",
      element: <><HeaderCompo/><HomeCompo/></>,
    },
    {
      path: "/about",
      element: <><HeaderCompo/><About/></>,
    },
  ]);

  export default MainRouter;