import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("pages/home/Home"));
const Movies = lazy(() => import("pages/movies/Movies"));
const NotFound = lazy(() => import("pages/notFound/NotFound"));
const SharedLayout = lazy(() => import("./SharedLayout/Sharedlayout"));
const MovieCard = lazy(() => import('../pages/MovieCard/MovieCard'));
const Credits = lazy(() => import('components/Credits/Credits'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => { 
  return (  
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieCard />}>
          <Route path='cast' element={<Credits />} />
          <Route path='reviews' element={<Reviews /> } />
        </Route>
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
};
