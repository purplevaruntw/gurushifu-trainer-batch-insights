import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableRowCustom from "../TableRow/TableRowCustom";
import "./BatchData.css";
const BatchData = ({ data }) => {
	return (
		<>

			<h2>Progress Status</h2>
			<Paper className="paper">

				<TableContainer className="table-container">
					<Table stickyHeader aria-label="sticky table">
						<TableHead>
							<TableRow>
								<TableCell>Exercise</TableCell>
								<TableCell align="right">Count</TableCell>
							</TableRow>
						</TableHead>
						<TableBody className="table">
							{Object.keys(data).map((val, key) => {
							return <TableRowCustom key={key} name={val} count={data[val]} />;
						})}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</>
	);
};

export default BatchData;
//https://purplevaruntw.github.io/gurushifu-trainer-batch-insights/