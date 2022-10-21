import { api } from "../api"

export const fetchUsers= () => async dispatch => {
    const response = await api.get('/users');
    dispatch({type: 'GET_USERS', payload: response.data})
}

export const getUsers = () => dispatch => {
    return dispatch({type: 'FETCH_USERS', payload: {}})
}

export const selectUser = (user) => dispatch => {
    return dispatch({type: 'SELECTED_USER', payload: user})
}

export const deleteUserSelected = (user) => dispatch => {
    return dispatch({type: 'DELETE_USER', payload : user});
}

export const sortAscending = () => dispatch => {
    return dispatch({type: 'SORT_ASC', payload: 'Sort Ascending'});
}

export const sortDescending = () => dispatch => {
    return dispatch({type: 'SORT_DSC', payload: 'Sort Descending'});
}
const allActions = {
    fetchUsers,
    selectUser,
    deleteUserSelected,
    getUsers,
    sortAscending,
    sortDescending
}

export default allActions;