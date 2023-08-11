import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import css from './Reviews.module.css';

import { getMovieReview } from "servise/api-film";

const Reviews = () => {
    const [review, setReview] = useState([]);
    const { moviesId } = useParams();

    useEffect(() => {
        getMovieReview(moviesId).then(data => setReview(data))
    }, [moviesId])

    const comment = review.map(({ author, content, created_at, id }) => (
        <li key={id} className={css.item} >
            <h3 className={css.title}>{author}</h3>
            <p className={css.comment}>{content}</p>
            <span className={css.date}>{created_at.replace(new RegExp(`T.*`), '').replace(/-/g, ' ')}</span>
        </li>
    ))

    return (
        <ul>
            {review.length > 0 ? comment : <li className={css.fail} >No reviews</li>}
        </ul>
    )
}

export default Reviews;