import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

let Todos: Todo[] = [];

const TodosSlice = createSlice({
  name: "todos",
  initialState: Todos,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<Todo>) => {
      state.push(payload);
    },
  },
});

export const { addTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
