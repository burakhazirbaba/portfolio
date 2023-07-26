import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
        <Link to="/portfolio"><h1>BH</h1></Link>
        </div>
        <nav className="navbar">
          <Link to="/portfolio">Home</Link>
          <Link to="/portfolio/Projects">Projects</Link>
          <Link to="/portfolio/Blog">Blog</Link>
        </nav>
      </header>
    </div>
  );
};
export default Header;
