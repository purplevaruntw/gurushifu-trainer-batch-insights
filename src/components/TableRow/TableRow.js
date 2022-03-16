import React from "react";
import "./TableRow.css";
const TableRow = ({ name, count }) => {
	return (
		<div className="table-row">
			<div className="name">{name}</div>
			<div className="count">{count}</div>
		</div>
	);
};

export default TableRow;
