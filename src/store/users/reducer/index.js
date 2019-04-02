const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_USERS":
      return state;
    case "SET_USERS":
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default usersReducer;
