import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { editTodo, deleteTodo } from '../redux/modules/TodoSlice';
import api from '../axios/api';
import { Todo } from '../types';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const editTodoToServer = async ({
    id,
    isDone,
  }: {
    id: string;
    isDone: boolean;
  }) => {
    await api.patch(`${id}`, { isDone: !isDone });
  };

  const deleteTodoToServer = async (id: string) => {
    await api.delete(`${id}`);
  };

  const changeHandler = ({ id, isDone }: { id: string; isDone: boolean }) => {
    editTodoToServer({ id, isDone });
    dispatch(editTodo(id));
  };

  const deleteHandler = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteTodoToServer(id);
      dispatch(deleteTodo(id));
    }
    return;
  };

  return (
    <ScList>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <ScCompleteBtn
        onClick={() => changeHandler({ id: item.id, isDone: item.isDone })}
      >
        {item.isDone ? '취소' : '완료'}
      </ScCompleteBtn>
      <ScDeleteBtn onClick={() => deleteHandler(item.id)}>삭제</ScDeleteBtn>
    </ScList>
  );
};

const ScList = styled.li`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  min-height: 120px;

  h3,
  p {
    margin-bottom: 10px;
  }
`;

const ScCompleteBtn = styled.button`
  background-color: #1abc9c;
  margin-right: 10px;
`;

const ScDeleteBtn = styled.button`
  background-color: #c0392b;
  color: #fff;
`;
export default TodoItem;
