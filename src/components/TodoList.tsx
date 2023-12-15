import React from 'react';
import { Todo } from '../types';
import TodoItem from './TodoItem';
import styled from 'styled-components';

interface TodoListProps {
  todos: Todo[];
  isDone: boolean;
  changeIsDone: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({
  todos,
  changeIsDone,
  deleteTodo,
  isDone,
}: TodoListProps) => {
  return (
    <ScWrapper>
      <h2>{isDone ? '✨ 완료 ✨' : '💪 진행중 💪'}</h2>
      <ScListWrapper>
        {todos
          .filter((item) => item.isDone === isDone)
          .map((item) => (
            <TodoItem
              item={item}
              changeIsDone={changeIsDone}
              deleteTodo={deleteTodo}
            />
          ))}
      </ScListWrapper>
    </ScWrapper>
  );
};

const ScWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  min-width: 800px;

  h2 {
    margin-bottom: 16px;
  }
`;

const ScListWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  min-height: 200px;
`;

export default TodoList;
