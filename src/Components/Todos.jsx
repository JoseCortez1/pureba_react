import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const ToDos = ({ data, page }) => {
	return (
		<div className="table_container">
			<TableContainer component={Paper}>
				<Table sx={{ width: 750 }} aria-label="ToDos table">
					<TableHead>
						<TableRow>
							<TableCell align="center">#</TableCell>
							<TableCell align="center">User</TableCell>
							<TableCell align="left">Description</TableCell>
							<TableCell align="center">Completed</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row, idx) => {
							if (idx >= (page - 1) * 10 && idx < page * 10) {
								return (
									<>
										<TableRow
											key={row.id}
											sx={{
												"&:last-child td, &:last-child th": { border: 0 },
											}}
											classes={{
												root: row.completed
													? "	MuiTableRow-root completed"
													: "MuiTableRow-root",
											}}>
											<TableCell align="center">{row.id}</TableCell>
											<TableCell align="center">{row.userId}</TableCell>
											<TableCell a component="th" scope="row">
												{row.title}
											</TableCell>
											<TableCell align="center">
												{row.completed ? <CheckIcon /> : <CloseIcon />}
											</TableCell>
										</TableRow>
									</>
								);
							}
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
export default ToDos;
