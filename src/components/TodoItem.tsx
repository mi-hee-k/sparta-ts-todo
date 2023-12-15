import React from 'react';
import styled from 'styled-components';

interface TodoItemProps {
  item: { id: number; title: string; content: string };
  changeIsDone: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ item, changeIsDone, deleteTodo }: TodoItemProps) => {
  return (
    <ScList key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <ScCompleteBtn onClick={() => changeIsDone(item.id)}>완료</ScCompleteBtn>
      <ScDeleteBtn onClick={() => deleteTodo(item.id)}>삭제</ScDeleteBtn>
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
