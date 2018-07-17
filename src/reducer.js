const initialState = {
    showLoginPage: false,
    currentUserId: null,
    currentUserName: null,


}


function reducer (state = initialState, action) {

        console.log('state', state);
        console.log('action', action);

    
        switch(action.type) {
          case "CLICK_EVENT":
            const { data } = action.payload;
            let found = state.shows.find( e => e.id === data)
            return {...state, selectedShow: found }
    
          case "CLICK_LOGIN_EVENT":
            return { ...state, showLoginPage: action.payload.data }
          case "LOGIN_EVENT":
            return { ...state, 
                currentUserId: action.payload.data.id, 
                currentUserName: action.payload.data.user_name,
                showLoginPage: false }
          case "LOGOUT_EVENT":
            return { ...state, currentUserId: null, currentUserName: null}
        //   case "TOGGLE_DANCING":
        //     return { ...state, dancing: !state.dancing }
        //   case "SET_COUNTER":
        //     return { ...state, counter: action.payload.value }
          default:
            return state;
        }
      
      
}

export default reducer;