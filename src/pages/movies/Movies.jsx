import { useEffect, useState } from "react";

import { getQuerry } from "servise/api-film";
import { useSearchParams } from 'react-router-dom';

import { Search } from "components/Search/Search"
import { Answer } from "components/Answer/Answer";
import { Loader } from "components/Loader/Loader";
import { Error } from '../../components/Error/Error'
import css from './Movies.module.css';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [answer, setAnswer] = useState([]);
    const [totalResults, setTotalResults] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;
        const startFetching = async () => {
        setLoading(true);
        try {
            const { results, total_results } = await getQuerry(query);
            setAnswer(results);
            setTotalResults(total_results);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        };
        startFetching();
    }, [query])

    const searchQuery = (query) => {
        const params = query !== '' ? { query } : {};
        setSearchParams(params);
    }

    return (
        <div className={css.container}>
            <Search searchQuery={searchQuery}></Search>
            {loading ? <Loader /> : <Answer movies={answer} ></Answer>}
            {totalResults === 0 && (
                <Error errorText={'Sorry, nothing has been found at your request'} />
            )}
            {error && (
                <Error
                errorText={`Something went wrong... ${error}. Please try again.`}
                />
            )}
        </div>
    )
}

export default Movies;