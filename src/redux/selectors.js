import { createSelector } from "@reduxjs/toolkit";

export const selectMovies = state => state.movies.movies;
export const selectFilter = state => state.filter


export const selectFilteredMovies = createSelector(
    [selectMovies, selectFilter],
    (movies, filter) => {
        return movies.filter(({title}) => title.toLowerCase().includes(filter.toLowerCase()))
    }
)