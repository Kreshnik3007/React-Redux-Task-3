const initialState = {
  users: [],
  selected: [],
};

const selectUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.map((user) => {
          return {
            id: user.id,
            key: user.id,
            label: user?.name,
            email: user?.email,
            address: user.address?.street,
            phone: user?.phone,
            company: user?.company?.name,
            website: user?.website,
          };
        }),
      };
    case "SELECTED_USER":
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== action.payload.id)],
        selected: [...state.selected, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        selected: [...state.selected].filter(
          (user) => user.id !== action.payload.id
        ),
      };
    case "SORT_ASC":
      let sorted = state.selected.slice().sort((a, b) => {
        if (a.company > b.company) {
          return 1;
        }
        if (a.company < b.company) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        selected: sorted,
      };
    case "SORT_DSC":
      let sortedDsc = state.selected.slice().sort((a, b) => {
        if (a.company < b.company) {
          return 1;
        }
        if (a.company > b.company) {
          return -1;
        }
        return 0;
      });
      return {
        ...state,
        selected: sortedDsc,
      };
    default:
      return state;
  }
};
export default selectUserReducer;
