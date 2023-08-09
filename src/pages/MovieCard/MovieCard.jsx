import { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servise/api-film';

export const MovieCard = () => {
    const { moviesId } = useParams();
    const [movie, setMovie] = useState({});
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => {
    getMovieDetails(moviesId).then(data => setMovie(data));
    }, [moviesId]);


    const { poster_path, title, vote_average, overview, genres } = movie;
    
    return (
        <div>
            <Link to={backLinkHref.current}></Link>
            <div>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <p>User Score: {Math.random(vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    <p>{genres?.map(({ name }) => name).join(', ')}</p>
                </div>
            </div>
        </div>
    )
}