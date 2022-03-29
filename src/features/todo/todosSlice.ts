import { createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

export interface Todo {
	id: string;
	title: string;
	isCompleted: boolean;
}

export interface TodosState {
	todos: Todo[];
}

const initialState: TodosState = {
	todos: []
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newTodo: Todo = {
				id: uuidv4(),
				title: action.payload,
				isCompleted: false,
			}
			state.todos.push(newTodo);
		},

		deleteTodo: (state, action)=>{
			const index = findTodoIndex(state.todos, action.payload);
			state.todos.splice(index, 1);
		},

		editTodo: (state, action)=>{
			const index = findTodoIndex(state.todos, action.payload.id);
			state.todos[index].title = action.payload.title;
		},

		toggleCompleteTodo: (state, action) => {
			const index = findTodoIndex(state.todos, action.payload.id);
			state.todos[index].isCompleted = !state.todos[index].isCompleted;
		}


	}
});


const findTodoIndex = (todos: Todo[], id: string) => {
	return todos.findIndex(todo => todo.id === id);
}

export const { addTodo, deleteTodo, editTodo, toggleCompleteTodo } = todosSlice.actions;

export default todosSlice.reducer;