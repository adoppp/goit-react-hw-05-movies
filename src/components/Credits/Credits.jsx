import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import { getMovieCredits } from "servise/api-film";
import css from './Credits.module.css';
import img from '../../img/not-found-wallpaper.jpg'

const Credits = () => {
    const [cast, setCast] = useState([]);
    const { moviesId } = useParams();

    useEffect(() => {
      getMovieCredits(moviesId).then(data => setCast(data))
    }, [moviesId])

    const actor = cast.map(({ profile_path, name, character, cast_id }) => (
        <li key={cast_id} className={css.item}>
            <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : img
                }
                alt={name}
            />
            <h2 className={css.title}>{name}</h2>
            <p className={css.character}>{character}</p>
        </li>
    ))

    return (
            <ul className={css.list}>
                {actor}
            </ul>
    )

}

export default Credits;