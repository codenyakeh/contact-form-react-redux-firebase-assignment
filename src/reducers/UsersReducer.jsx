import { v4 as uuid } from "uuid";

let initialState = {
  users: [
    // { ContactName: "Emrica", Location: "East", Number: "21", id: uuid() },
    // { ContactName: "Emma", Location: "West", Number: "22", id: uuid() },
    // { ContactName: "Eno", Location: "north", Number: "23", id: uuid() },
  ],
};

let UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: action.payload };

    case "DELETE_USER":
      const filteredUser = state.users.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, users: filteredUser };

    case "EDIT_USER":
      const updatedUser = state.users.map((users) => {
        if (users.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return users;
        }
      });
      return { ...state, users: updatedUser };

    default:
      return state;
  }
};
export default UserReducer;
