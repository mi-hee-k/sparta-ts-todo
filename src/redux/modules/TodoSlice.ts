import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../../types';
import { RootState } from '../config/configStore';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos', // 모듈의 이름
  initialState, // 모듈의 초기 상태
  reducers: {
    setTodo: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<String>) => {
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, isDone: !item.isDone }
          : item;
      });
    },
    deleteTodo: (state, action: PayloadAction<String>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectTodos = (state: RootState) => state.todos;

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addTodo, editTodo, deleteTodo, setTodo } = todoSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default todoSlice.reducer;
