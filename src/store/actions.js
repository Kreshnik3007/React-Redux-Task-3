import { api } from "../api";

export const fetchUsers = () => async (dispatch) => {
  const response = await api.get("/users");
  dispatch({ type: "GET_USERS", payload: response.data });
};

export const selectUser = (user) => (dispatch) => {
  return dispatch({ type: "SELECTED_USER", payload: user });
};

export const deleteUserSelected = (user) => (dispatch) => {
  return dispatch({ type: "DELETE_USER", payload: user });
};

export const sortAscending = () => (dispatch) => {
  return dispatch({ type: "SORT_ASC" });
};

export const sortDescending = () => (dispatch) => {
  return dispatch({ type: "SORT_DSC", payload: "Sort Descending" });
};
const allActions = {
  fetchUsers,
  selectUser,
  deleteUserSelected,
  sortAscending,
  sortDescending,
};

export default allActions;
