import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/buildings">All Buildings</NavLink>
      <NavLink to="/add-building">Add New Building!</NavLink>
    </nav>
  );
}

export default Nav;
