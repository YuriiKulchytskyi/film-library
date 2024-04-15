import {
    createSlice
} from "@reduxjs/toolkit";
import {
    deleteExistingMovie,
    fetchMovies,
    getMovieById,
    postNewMovie
} from "./moviesOperations";

const initialState = {
    movies: [],
    favorites: [],
    error: null,
    isLoading: false,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload;
            })
            .addCase(getMovieById.pending, state => {
                state.isLoading = true;

            })
            .addCase(getMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.isLoading = false;
                console.log(action.payload);
                state.favorites.push(action.payload);
                console.log(state.favorites, state.favorites.length);

            })
            .addCase(postNewMovie.pending, state => {
                state.isLoading = true;
            })
            .addCase(postNewMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(postNewMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = [...state.movies, action.payload]
            })
            .addCase(deleteExistingMovie.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteExistingMovie.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteExistingMovie.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = state.movies.filter(item => item.id !== action.payload)
        })
    }
})

export const getAllMovies = state => state.movies.movies;
export const getFavoriteMovies = state => state.movies.favorites;

export const moviesReducer = moviesSlice.reducer;