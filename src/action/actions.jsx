export const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};
export const deleteUser = (user) => {
  return {
    type: "DELETE_USER",
    payload: user,
  };
};
export const editUsers = (data) => {
  return {
    type: "EDIT_USER",
    payload: { data },
  };
};
