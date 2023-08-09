import { Link, useLocation } from 'react-router-dom';

export const FilmList = ({ movies }) => {

    const location = useLocation();

    const item = movies.map(({ id, title, poster_path }) => {
        return (<li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : ""}
                alt={title} />
                <h2>{title}</h2>
            </Link>    
        </li>)
    })
    

    return (
        <ul>
            {item}
        </ul>
    )
}