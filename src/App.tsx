import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import styled from 'styled-components';

function App() {
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
