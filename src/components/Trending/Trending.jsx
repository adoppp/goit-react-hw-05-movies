import { useLocation } from 'react-router-dom';

import img from '../../img/not-found-wallpaper.jpg'
import css from './Trending.module.css';

import { Link } from './Trending.styled';

export const FilmList = ({ movies }) => {

    const location = useLocation();

    const item = movies.map(({ id, title, poster_path }) => {
        return (<li key={id} className={css.item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : img}
                alt={title} />
                <h2 className={css.title}>{title}</h2>
            </Link>    
        </li>)
    })
    

    return (
        <ul className={css.MovieList}>
            {item}
        </ul>
    )
}