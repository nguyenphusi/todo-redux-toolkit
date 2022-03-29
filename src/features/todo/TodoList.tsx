import { useAppSelector } from "../../app/hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useAppSelector(state => state.todos.todos);

	const allTodosCount = todos.length;
	const allCompletedTodosCount = todos.filter(todo => todo.isCompleted).length;

	return (
		<>
			<div>
				 {allCompletedTodosCount} / {allTodosCount}
			</div>
			<ul style={{ paddingInlineStart: '0px' }}>
				{todos.map((todo) => (
					<TodoItem todo={todo} key={todo.id}/>
					))}
			</ul>
		</>
	);
}

export default TodoList;