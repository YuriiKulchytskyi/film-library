import {
    createAsyncThunk
} from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'a4e0e6c94492c515df52f4a6ebcc54c7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const params = {
    params: {
        api_key: API_KEY,
        language: 'en-US',
    },
};

export const fetchTrendingMovies = createAsyncThunk(
    'films/fetchTrendingMovies',
    async (_,thunkAPI) => {
        try {
            const response = await axios.get(`trending/movie/day`, params);
            console.log(response.data.results);
            return response.data.results;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
);

export const getInformationById = createAsyncThunk(
    'films/getInformationById',
    async (movieId, thunkAPI) => {
        try {
            const response = await axios.get(`/movie/${movieId}`, params)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const fetchMovieDetails = createAsyncThunk(
    'movies/fetchMovieDetails',
    async (movieId) => {
        const response = await axios.get(`/movie/${movieId}`, params);
        return response.data;
    }
);

export const handleSearch = createAsyncThunk(
    'movies/handleSearch',
    async (movieName) => {
        const response = await axios.get(`/search/movie?query=${movieName}`, params);
        return response.data.results;
    }
);

export const fetchMovieCast = createAsyncThunk(
    'movies/fetchMovieCast',
    async (movieId) => {
        const response = await axios.get(`movie/${movieId}/credits?`, params);
        return response.data.cast;
    }
);

export const fetchMovieReviews = createAsyncThunk(
    'movies/fetchMovieReviews',
    async (movieId) => {
        const response = await axios.get(`movie/${movieId}/reviews?`, params);
        return response.data.results;
    }
);