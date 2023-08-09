import { Routes, Route } from "react-router-dom";
//import { lazy } from "react";
import { Home } from "pages/home/Home";
import { Movies } from "pages/movies/Movies";
import { NotFound } from "pages/notFound/NotFound";
import { SharedLayout } from "./SharedLayout/Sharedlayout";
import { MovieCard } from '../pages/MovieCard/MovieCard'

// const Home = lazy(() => import("pages/home/Home"));
// const Movies = lazy(() => import("pages/movies/Movies"));
// const NotFound = lazy(() => import("pages/notFound/NotFound"));

export const App = () => { 
  return (  
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieCard />}></Route>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};
