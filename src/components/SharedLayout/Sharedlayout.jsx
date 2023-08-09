import { Outlet } from "react-router-dom";
import { Link } from "../App.styled";

export const SharedLayout = () => { 
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};