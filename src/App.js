import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects"
import Blog from "./Pages/Blog"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div style={{backgroundColor: "#EEEDED"}}>
      <Routes>
      <Route path="/portfolio" element={<Home />}/>
      <Route path="/portfolio/Projects" element={<Projects />}/>
      <Route path="/portfolio/Blog" element={<Blog />}/>
      </Routes>
    </div>
  );
};
export default App;
