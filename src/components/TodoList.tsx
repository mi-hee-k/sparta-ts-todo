import TodoItem from './TodoItem';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../axios/api';

interface TodoListProps {
  isDone: boolean;
}

const TodoList = ({ isDone }: TodoListProps) => {
  // Queries
  const {
    isLoading,
    isError,
    error,
    data: todos,
  } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) return <h2>{error.message}</h2>;

  return (
    <ScWrapper>
      <h2>{isDone ? '✨ 완료 ✨' : '💪 진행중 💪'}</h2>
      <ScListWrapper>
        {todos!
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
