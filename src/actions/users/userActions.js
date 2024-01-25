import {
  SET_USERS_FAILURE,
  SET_USERS_STARTED,
  SET_USERS_SUCCESS,
} from "../../store/userReducer";
import axios from "axios";

const setUsersStarted = () => ({
  type: SET_USERS_STARTED,
});
const setUsersSuccess = (users) => ({
  type: SET_USERS_SUCCESS,
  payload: users,
});
const setUsersFailure = (error) => ({
  type: SET_USERS_FAILURE,
  payload: error,
});

export const setUsers = () => {
  return async (dispatch) => {
    dispatch(setUsersStarted());

    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    try {
        const { data } = await axios.get(apiUrl);
        setTimeout(() => {
        dispatch(setUsersSuccess(data));
        }, 2000);
    } catch (error) {
        dispatch(setUsersFailure(error.message));
    }
  };
};
