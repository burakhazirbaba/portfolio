import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
        <Link to="/"><h1>BH</h1></Link>
        </div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Blog">Blog</Link>
        </nav>
      </header>
    </div>
  );
};
export default Header;
