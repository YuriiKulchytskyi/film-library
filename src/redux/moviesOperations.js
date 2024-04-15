import {
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:3001/movies'

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/')
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const getMovieById = createAsyncThunk(
    'movies/getMovieById',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/${id}`)
            return response.data
        } catch (error) {
            thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const postNewMovie = createAsyncThunk(
    'movies/postNewMovie',
    async (movieData, thunkAPI) => {
        try {
            const response = await axios.post('/', movieData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const deleteExistingMovie = createAsyncThunk(
    'movies/deleteExistingMovie',
    async (id, thunkAPI) => {
        try {
            const response = await axios.delete(`/${id}`)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)