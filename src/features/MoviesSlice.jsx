import { createSlice } from '@reduxjs/toolkit'



const MoviesSlice = createSlice({
    name : "movies",
    initialState : {
    saved : []
},
    reducers : {
        addMovie : (state,action) => {
            state.saved.push(action.payload)
        },
        removeMovie : (state,action) => {
       
        }
    }
})

export const { addMovie } = MoviesSlice.actions;
export default MoviesSlice.reducer