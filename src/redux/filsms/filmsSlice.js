import {
    createSlice
} from "@reduxjs/toolkit";
import {
    fetchTrendingMovies,
    getInformationById
} from "./filmsOperations";


const filmSlice = createSlice({
    name: 'films',
    initialState: {
        films: [],
        isLoading: false,
        error: null,
        favorites: [],
        watchLater: [],
    },
    reducers: {
        addToFavorite(state, action) {
            state.favorites.push(action.payload)
            console.log(action.payload);
        },
        removeFromFavorites(state, action) {
            const index = state.favorites.findIndex((item) => item.id === action.payload)
            state.favorites.splice(index, 1)
        },
        addToWatchLater(state, action) {
            state.watchLater.push(action.payload)
        },
        removeFromWatchLater(state, action) {
            const index = state.watchLater.findIndex((item) => item.id === action.payload)
            state.watchLater.splice(index, 1)
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrendingMovies.fulfilled, (state, action) => {
                state.films = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchTrendingMovies.pending, state => {
                state.isLoading = true
            })
            .addCase(fetchTrendingMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
            .addCase(getInformationById.pending, state => {
                state.isLoading = true;
            })
            .addCase(getInformationById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.films = action.payload

            })
            .addCase(getInformationById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})


export const filmsReducer = filmSlice.reducer

export const { addToFavorite, addToWatchLater, removeFromFavorites, removeFromWatchLater } = filmSlice.actions;

 