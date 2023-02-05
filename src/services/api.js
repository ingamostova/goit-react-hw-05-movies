import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '917b4db2abe704f469567a6fce387097';

export async function fetchTrendingMovies() {
    const response = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
    );
    return response.data.results;
}

export async function getMoviesBySearch(query) {
    const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    )
    return response.data.results;
}

export async function getMovieById(movieId) {
    const response = await axios.get(
        `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    )
    return response.data;
}

export async function getCast(id) {
    const response = await axios.get(
        `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    )
    return response.data.cast;
}

export async function getReviews(id) {
    const response = await axios.get(
        `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    )
    return response.data.results;
}