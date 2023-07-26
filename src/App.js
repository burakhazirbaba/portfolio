import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects"
import Blog from "./Pages/Blog"
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div style={{backgroundColor: "#EEEDED"}}>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Blog" element={<Blog />}/>
      </Routes>
    </div>
  );
};
export default App;
