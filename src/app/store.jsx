import { configureStore } from "@reduxjs/toolkit"
import MovieReducer from '../features/MoviesSlice'

const store = configureStore({
    reducer : {
        movies : MovieReducer
    }
})

export default store;