import { Outlet } from "react-router-dom";
import { Link } from "../App.styled";
import { Suspense } from "react";

import { Loader } from "components/Loader/Loader";
import css from './SharedLayout.module.css';

const SharedLayout = () => { 
  return (
    <div>
      <div className={css.container}>
      <nav className={css.nav}>
        <Link to='/' className={css.link}>Home</Link>
        <Link to='/movies'>Movies</Link>
        </nav>
      </div>
        <Suspense fallback={<Loader /> }>
            <Outlet />
        </Suspense>
    </div>
  );
};

export default SharedLayout;