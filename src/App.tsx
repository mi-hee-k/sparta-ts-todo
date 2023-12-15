import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { setTodo } from './redux/modules/TodoSlice';
import { useAppDispatch } from './hooks';

function App() {
  const dispatch = useAppDispatch();

  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todos');
    dispatch(setTodo(data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <header>
        <h1>TodoList</h1>
      </header>

      <main>
        {/* form */}
        <section>
          <AddForm />
        </section>

        {/* list */}
        <ScListSection>
          <TodoList isDone={false} />
          <TodoList isDone={true} />
        </ScListSection>
      </main>
    </>
  );
}

const ScListSection = styled.section`
  background-color: #ecf0f1;
`;

export default App;
