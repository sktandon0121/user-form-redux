import { ADD_USER } from "../type";

const initialState = {
  name: "",
  email: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      };

    default:
      return state;
  }
};

export default userReducer;
