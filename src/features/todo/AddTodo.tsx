import { useState } from "react";
import { addTodo } from "./todosSlice";
import { useAppDispatch } from "../../app/hooks";

const AddTodo = () => {

	const [value, setValue] = useState('')

	const dispatch = useAppDispatch();

	const onAdd = () => {
		if(!value.trim()) {
			return;
		}

		dispatch(addTodo(value));
		setValue('');
	}

	return (
		<>
			<div style={{display: 'flex'}}>
				<input value={value}
					onChange={(event) => setValue(event.target.value)}
				></input>
				<button onClick={onAdd}>Add</button>
			</div>

		</>
	);
}

export default AddTodo;