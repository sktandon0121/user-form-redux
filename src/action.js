import { ADD_USER } from "../type";

export const setUser = data => dispatch => {
  dispatch({
    type: ADD_USER,
    payload: data
  });
};
