import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useAppSelector } from '../hooks';
import { Todo } from '../types';

interface TodoListProps {
  isDone: boolean;
}

const TodoList = ({ isDone }: TodoListProps) => {
  const todos = useAppSelector((state) => state.todos);
  return (
    <ScWrapper>
      <h2>{isDone ? '✨ 완료 ✨' : '💪 진행중 💪'}</h2>
      <ScListWrapper>
        {todos
          .filter((item: Todo) => item.isDone === isDone)
          .map((item: Todo) => (
            <TodoItem key={item.id} item={item} />
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
