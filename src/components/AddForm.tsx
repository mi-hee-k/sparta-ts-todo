import { FormEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../hooks';
import { addTodo } from '../redux/modules/TodoSlice';
import api from '../axios/api';
import { Todo } from '../types';

const AddForm = () => {
  const dispatch = useAppDispatch();

  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const changeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const addTodoToServer = async (newTodo: Todo) => {
    await api.post('', newTodo);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      inputs.title.trim().length === 0 ||
      inputs.content.trim().length === 0
    ) {
      alert('제목과 내용을 입력해주세요');
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: inputs.title,
      content: inputs.content,
      isDone: false,
    };

    addTodoToServer(newTodo);
    dispatch(addTodo(newTodo));
    setInputs({
      title: '',
      content: '',
    });
  };

  return (
    <ScForm onSubmit={submitForm}>
      <input
        type='text'
        placeholder='제목을 입력해주세요'
        name='title'
        value={inputs.title}
        onChange={changeInputs}
      />
      <input
        type='text'
        placeholder='내용을 입력해주세요'
        name='content'
        value={inputs.content}
        onChange={changeInputs}
      />
      <ScAddBtn>추가</ScAddBtn>
    </ScForm>
  );
};

const ScForm = styled.form`
  background-color: #eee;
  padding: 20px;
  min-width: 800px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;

  input {
    width: 36%;
    padding: 10px;
    border-radius: 10px;
  }
`;

const ScAddBtn = styled.button`
  background-color: #f1c40f;
  width: 20%;
`;

export default AddForm;
