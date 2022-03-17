import React from "react";
import "./TableRow.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
const TableRowCustom = ({ name, count }) => {
	return (
		<TableRow>
			<TableCell>{name}</TableCell>
			<TableCell align="right">{count}</TableCell>
		</TableRow>

	);
};

export default TableRowCustom;
