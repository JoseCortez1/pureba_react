import React from "react";
import { Button, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateTodo = ({ value, handleInput, createPost }) => {
	return (
		<form className="create_todo" onSubmit={createPost}>
			<TextField
				id="create-tab"
				label="To Do Item"
				variant="outlined"
				value={value}
				onChange={handleInput}
			/>
			<Button
				variant="outlined"
				size="large"
				color="primary"
				type="submit"
				onClick={createPost}
				endIcon={<AddCircleOutlineIcon />}>
				Create
			</Button>
		</form>
	);
};

export default CreateTodo;
