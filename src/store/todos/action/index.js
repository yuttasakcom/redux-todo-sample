import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return {
    type: "GET_TODOS",
    payload: response.data.slice(0, 20),
  };
};
