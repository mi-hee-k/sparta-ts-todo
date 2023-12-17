import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER}`,
});

export const getTodos = async () => {
  const response = await instance.get('/');
  return response.data;
};

export const addTodo = async (newTodo: Todo) => {
  await instance.post('', newTodo);
};

export const editTodo = async ({
  id,
  isDone,
}: {
  id: string;
  isDone: boolean;
}) => {
  await instance.patch(`${id}`, { isDone: !isDone });
};

export const deleteTodo = async (id: string) => {
  await instance.delete(`${id}`);
};

export default instance;
