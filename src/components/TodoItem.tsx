import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { editTodo, deleteTodo } from '../redux/modules/TodoSlice';

interface TodoItemProps {
  item: { id: string; title: string; content: string };
}

const TodoItem = ({ item }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const changeHandler = (id: string) => {
    dispatch(editTodo(id));
  };

  const deleteHandler = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteTodo(id));
    }
    return;
  };

  return (
    <ScList key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <ScCompleteBtn onClick={() => changeHandler(item.id)}>완료</ScCompleteBtn>
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
