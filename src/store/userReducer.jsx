export const ADD_USER = "users/addUser";
export const SET_USERS = "users/setUsers";
export const DELETE_USER = "users/deleteUser";


 const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload]};
    case SET_USERS:
      return { ...state, users: action.payload};
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};