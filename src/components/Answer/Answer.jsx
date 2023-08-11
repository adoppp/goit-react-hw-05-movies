import img from '../../img/not-found-wallpaper.jpg';
import { useLocation } from 'react-router-dom';

import css from './Answer.module.css';
import { Link } from './Answer.module';

export const Answer = ({ movies }) => {
    const location = useLocation();

    const movieItem = movies.map(({ id, original_title, poster_path }) => (
        <li key={id} className={css.item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : img} alt={original_title} />
                <h2 className={css.title}>{original_title}</h2>
            </Link>
        </li>
    ))

    return (
        <ul className={css.list}>
            {movieItem}
        </ul>
    )
}