import { useAppSelector } from "../../app/hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const todos = useAppSelector(state => state.todos.todos);

	return (
		<ul style={{ paddingInlineStart: '0px' }}>
			{todos.map((todo) => (
				<TodoItem todo={todo}/>
			))}
		</ul>
	);
}

export default TodoList;