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
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<input value={value} style={{width: '200px'}}
					onChange={(event) => setValue(event.target.value)}
				></input>
				<div style={{width: '150px', display: 'flex', justifyContent: 'flex-end'}}>
					<button onClick={onAdd}>Add</button>
				</div>
			</div>

		</>
	);
}

export default AddTodo;