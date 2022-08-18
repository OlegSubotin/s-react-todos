import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nanoid(),
        completed: false,
        text: action.payload.text,
      });
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
    toggleCompeted(state, action) {
      const toggledTodo = state.todos.find(
        todo => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodo, deleteTodo, toggleCompeted } = todoSlice.actions;

export default todoSlice.reducer;
