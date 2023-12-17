import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';
import { deleteTodo, editTodo } from '../axios/api';

interface TodoItemProps {
  item: Todo;
}

const TodoItem = ({ item }: TodoItemProps) => {
  const qeuryClient = useQueryClient();

  // Mutations
  const editTodoMutation = useMutation({
    mutationFn: editTodo,
    onSuccess: () => {
      qeuryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      qeuryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return (
    <ScList>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <ScCompleteBtn
        onClick={() =>
          editTodoMutation.mutate({ id: item.id, isDone: item.isDone })
        }
      >
        {item.isDone ? '취소' : '완료'}
      </ScCompleteBtn>
      <ScDeleteBtn onClick={() => deleteTodoMutation.mutate(item.id)}>
        삭제
      </ScDeleteBtn>
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
