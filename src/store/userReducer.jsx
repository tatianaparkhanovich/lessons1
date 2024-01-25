export const ADD_USER = "users/addUser";
export const DELETE_USER = "users/deleteUser";
export const SET_USERS_STARTED = "users/setUsersStarted";
export const SET_USERS_SUCCESS = "users/setUsersSuccess";
export const SET_USERS_FAILURE = "users/setUsersFailure";

const initialState = {
   loading:false,
  users: [],
    error:null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return { ...state, users: state.users.filter(user =>user.id !==action.payload)};
    case SET_USERS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };
    case SET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};