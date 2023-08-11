import { useState } from "react";
import Notiflix from 'notiflix';

import css from './Search.module.css';

export const Search = ({ searchQuery }) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
       setSearch(e.target.value.trim().toLowerCase());
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        if (search === '') {
            return Notiflix.Notify.failure('Enter movie name');
        }

        searchQuery(search)
    }

    return (
        <form onSubmit={handleSumbit} className={css.form}>
            <input type="text" value={search} onChange={handleChange} name="search" className={css.input} placeholder="Enter movie name" autoFocus />
            <button type="submit" className={css.btn}>search</button>
        </form>
    )
}