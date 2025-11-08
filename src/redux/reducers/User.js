const initialState = {
    moviesSaved: []
}

export default function userRedux(state = initialState , action){
    if(action.type === 'saved'){
        return {...state, moviesSaved : [...initialState.moviesSaved,action.payload]}
    }
    return state;
}