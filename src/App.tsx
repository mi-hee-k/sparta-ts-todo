import React, { useState } from 'react';
import { Todo } from './types';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: uuidv4(),
      title: '할일1',
      content: '내용1',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '할일2',
      content: '내용2',
      isDone: false,
    },
    {
      id: uuidv4(),
      title: '할일3',
      content: '내용3',
      isDone: true,
    },
  ]);

  // 추가
  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  // 수정
  const changeIsDone = (id: string) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  // 삭제
  const deleteTodo = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setTodos((prev) => prev.filter((item) => item.id !== id));
    }
    return;
  };

  return (
    <>
      <header>
        <h1>TodoList</h1>
      </header>

      <main>
        {/* form */}
        <section>
          <AddForm addTodo={addTodo} />
        </section>

        {/* list */}
        <ScListSection>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            changeIsDone={changeIsDone}
            isDone={false}
          />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            changeIsDone={changeIsDone}
            isDone={true}
          />
        </ScListSection>
      </main>
    </>
  );
}

const ScListSection = styled.section`
  background-color: #ecf0f1;
`;

export default App;
