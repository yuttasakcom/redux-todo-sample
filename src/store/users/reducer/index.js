const initialState = [
  {
    id: 1,
    name: "Yo",
  },
  {
    id: 2,
    name: "Yea",
  },
  {
    id: 3,
    name: "Sri",
  },
];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return state;

    default:
      return state;
  }
};

export default usersReducer;
