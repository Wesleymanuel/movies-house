const initialState = {
    userLogin: null
}

export default function userRedux(state = initialState , action){
    if(action.type === 'user/login'){
        return {...state, userLogin : true}
    }
    return state;
}