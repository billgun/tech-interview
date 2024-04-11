import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  description: string;
  done: boolean;
}
interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo: Todo = {
        id: nanoid(),
        description: action.payload,
        done: false,
      };

      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateDone: (state, action) => {
      const { id } = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === id);
      if (todoToUpdate) {
        todoToUpdate.done = !todoToUpdate.done;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateDone } = todoSlice.actions;

export default todoSlice.reducer;
