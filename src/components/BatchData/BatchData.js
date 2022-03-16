import React from "react";
import TableRow from "../TableRow/TableRow";
import "./BatchData.css";
const BatchData = ({ data }) => {
	return (
		<div>
			<h1>Progress Status</h1>
			<hr />
			<div className="table">
				{Object.keys(data).map((val, key) => {
					return <TableRow key={key} name={val} count={data[val]} />;
				})}
			</div>
		</div>
	);
};

export default BatchData;
