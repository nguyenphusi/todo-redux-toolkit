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
		<li style={{display: 'flex', justifyContent: 'space-between', paddingTop: '4px'}}>
			{isEdit ? 
				<>
					<div style={{display: 'flex', width: '200px'}}>
						<input type='checkbox' checked={todo.isCompleted} onChange={onToggleComplete}/>
						<input style={{ width: '200px'}} value={value} onChange={(event) => setValue(event.target.value)} />
					</div>
					<div style={{width: '150px', display: 'flex', justifyContent: 'flex-end'}}>
						<button onClick={onEdit}>Save</button>
						<button onClick={onDelete}>Delete</button>
					</div>

				</>
				 : 
				<>
					<div style={{display: 'flex', width: '200px'}}>
						<input type='checkbox' checked={todo.isCompleted} onChange={onToggleComplete}/>
						<div style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.title}</div>
					</div>
					<div style={{width: '150px', display: 'flex', justifyContent: 'flex-end'}}>
						<button onClick={() => setIsEdit(true)}>Edit</button>
						<button onClick={onDelete}>Delete</button>
					</div>
				</>
			}
		</li>
	);
}

export default TodoItem;