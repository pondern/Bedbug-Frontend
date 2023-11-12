import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <Navlink to="/buildings">All Buildings</Navlink>
      <NavLink to="/add-building">Add New Building!</NavLink>
    </nav>
  );
}

export default Nav;
