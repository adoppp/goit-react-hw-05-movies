import axios from 'axios';

const KEY = '3efc5f27e297293a312846134ed309a3';
const BASE_URL = `https://api.themoviedb.org/3`;

// export const getFilms = async () => {
//     const response = await axios.get(BASE_URL);
//     console.log(response.data)
// }

export const getTrendingMovies = async () => {
    const TRENDING_URL = `${BASE_URL}/trending/movie/day?api_key=${KEY}`;

    try {
        const response = await axios.get(TRENDING_URL);
        return response.data;
    } catch (error) {
        console.log("getTrendingMovies", error);
    }
};

export const getQuerry = async (query) => {
    const QUERRY_URL = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`

    try {
        const response = await axios.get(QUERRY_URL);
        return response.data;
    } catch (error) {
        console.log("getQuerry", error);
    }
};

export const getMovieDetails = async (id) => {
    const MOVIE_DETAILS_URL = `${BASE_URL}/movie/${id}?api_key=${KEY}`;

    try {
        const response = await axios.get(MOVIE_DETAILS_URL);
        return response.data;
    } catch (error) {
        console.log("getMovieDetails", error)
    }
};

export const getMovieCredits = async (id) => {
    const MOVIE_CREDITS_URL = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`;

    try {
        const response = await axios.get(MOVIE_CREDITS_URL);
        return response.data.cast;
    } catch (error) {
        console.log("getMovieCredits", error)
    }
};

export const getMovieReview = async (id) => {
    const MOVIE_REVIEW_URL = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`;
    
    try {
        const response = await axios.get(MOVIE_REVIEW_URL);
        return response.data.results;
    } catch (error) {
        console.log("getMovieReview", error)
    }
};