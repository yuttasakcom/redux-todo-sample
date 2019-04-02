import axios from "axios";

export const setUsers = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    type: "SET_USERS",
    payload: data,
  };
};
