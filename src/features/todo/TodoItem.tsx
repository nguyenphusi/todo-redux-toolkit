import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { deleteTodo, editTodo, Todo, toggleCompleteTodo } from "./todosSlice";

interface TodoItemProps {
	todo: Todo;
}

const TodoItem = ({todo}: TodoItemProps) => {

	const [isEdit, setIsEdit] = useState(false);
	const [value, setValue] = useState(todo.title);

	const dispatch = useAppDispatch();

	const onDelete = () => {
		dispatch(deleteTodo(todo.id));
	};

	const onEdit = () => {
		setIsEdit(false);
		dispatch(editTodo({id: todo.id, title: value}));
	}

	const onToggleComplete = () => {
		dispatch(toggleCompleteTodo({id: todo.id}));
	}

	return (
		<li style={{display: 'flex'}}>
			{isEdit ? 
				<>
					<input value={value} onChange={(event) => setValue(event.target.value)} />
					<button onClick={onEdit}>Save</button>

				</>
				 : 
				<>
					<input type='checkbox' checked={todo.isCompleted} onChange={onToggleComplete}/>
					<div style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.title}</div>
					<button onClick={() => setIsEdit(true)}>Edit</button>
				</>
			}
			
			
			<button onClick={onDelete}>Delete</button>
		</li>
	);
}

export default TodoItem;