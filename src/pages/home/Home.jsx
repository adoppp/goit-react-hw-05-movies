import { getTrendingMovies } from '../../servise/api-film';
import { FilmList } from 'components/Trending/Trending';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
      getTrendingMovies().then(data => setMovies(data.results));
    }, []);

    return <FilmList movies={movies} location={location} />;
}