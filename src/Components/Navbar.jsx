import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link> | 
      <Link to="/register">Register</Link> | 
      <Link to="/photos">Photos</Link> |
      <Link to="/Eventcard1">Eventcard1</Link> |
      <Link to="/log">Login</Link>
    </nav>
  );
};

export default Navbar;
