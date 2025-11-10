import { createSlice } from '@reduxjs/toolkit'



const MoviesSlice = createSlice({
    name : "movies",
    initialState : {
    saved : []
},
    reducers : {
        addMovie : (state,action) => {
            console.log(action.payload)
            state.saved.push(action.payload)
        }
    }
})

export const { addMovie } = MoviesSlice.actions;
export default MoviesSlice.reducer