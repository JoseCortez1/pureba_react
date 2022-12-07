import { Button, Pagination, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Components/Loading";
import ReplayIcon from "@mui/icons-material/Replay";

import "./App.css";
import Error from "./Components/Error";
import ToDos from "./Components/Todos";
import CreateTodo from "./Components/CreateTodo";

const App = () => {
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [value, setValue] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			setLoading(true);
			const result = await axios.get(
				`https://jsonplaceholder.typicode.com/todos`
			);
			if (result.status == 200) {
				setError(false);
				setData(result.data);
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			}
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	};
	const createPost = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const result = await axios.post(
				`https://jsonplaceholder.typicode.com/posts`,
				{
					title: value,
					completed: false,
					userId: 1,
				}
			);
			if (result.status == 200 || result.status == 201) {
				setError(false);
				setValue("");
				setData((prev) => [result.data, ...prev]);
				setTimeout(() => {
					setLoading(false);
				}, 1000);
			}
		} catch (error) {
			setLoading(false);
			setError(true);
		}
	};

	useEffect(() => {
		setTotalPages(Math.ceil(data.length / 10));
	}, [data]);
	const handleChange = (event, value) => {
		setPage(value);
	};
	const handleInput = (event) => {
		setValue(event.target.value);
	};
	const handleReload = () => {
		fetchData();
	};
	return (
		<div className="App">
			<Button
				variant="outline"
				color="primary"
				endIcon={<ReplayIcon />}
				onClick={handleReload}>
				Reload
			</Button>
			{loading && <Loading />}
			{error && <Error />}
			{!loading && !error && (
				<>
					<CreateTodo
						value={value}
						handleInput={handleInput}
						createPost={createPost}
					/>

					<ToDos data={data} page={page} />

					<Pagination
						count={totalPages}
						page={page}
						size="large"
						onChange={handleChange}
					/>
				</>
			)}
		</div>
	);
};

export default App;
