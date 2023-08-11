import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servise/api-film';
import { GoBack } from './MovieCard.styled';
import { InfoLink } from './MovieCard.styled';

import img from '../../img/not-found-wallpaper.jpg';
import css from './MovieCard.module.css';
import { Loader } from 'components/Loader/Loader';

const MovieCard = () => {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => {
    getMovieDetails(moviesId).then(data => setMovie(data));
    }, [moviesId]);


    const { poster_path, title, vote_average, overview, genres } = movie;
    
    return (
        <div className={css.container}>
            <GoBack to={backLinkHref.current}>Go back</GoBack>
            <div className={css.description}>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w300${poster_path}`: img} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <p className={css.vote}>User Score: {Math.round(vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p className={css.overview}>{overview}</p>
                    <h2>Genres</h2>
                    <p className={css.genres} >{genres?.map(({ name }) => name).join(', ')}</p>
                </div>
            </div>
            <nav className={css.nav} >
                <InfoLink to='cast'className={css.link} >Cast</InfoLink>
                <InfoLink to='reviews'>Reviews</InfoLink>
            </nav>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieCard;