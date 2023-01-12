import { Route,Routes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import constants from "./constants/constants";
import Head_Tail from "./pages/head&tail/Head_Tail";

function App() {
  return (
    <Routes>
    <Route path={constants.HOME_PAGE} element={<Home/>} />
    <Route path={constants.ABOUT_PAGE} element={<About/>} />
    <Route path={constants.HEAD_TAIL_PAGE} element={<Head_Tail/>} />
    </Routes>
  );
}

export default App;
