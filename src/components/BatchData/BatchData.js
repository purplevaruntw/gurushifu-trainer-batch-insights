import React from "react";
import TableRow from "../TableRow/TableRow";
import "./BatchData.css";
const BatchData = ({ data }) => {
	const getFullName = (progress) => {
		const prefix = progress.projectName;
		var fullName = "";
		if (prefix === "trainingCamp") {
			fullName = "Training Camp";
		} else {
			fullName =
				prefix + " - Requirement " + (progress.requirementNumber + 1);
		}
		return fullName;
	};
	const getCount = (matcherString) => {
		var count = 0;
		data.forEach((val) => {
			const fullName = getFullName(
				val.progressResponse[val.progressResponse.length - 1]
			);
			if (fullName === matcherString) count++;
		});
		return count;
	};
	var counter = new Map();
	const displayProgress = (progress) => {
		const fullName = getFullName(progress);
		const count = getCount(fullName);
		if (counter[fullName]) return;

		counter.set(fullName, count);
		counter = new Map([...counter].sort());
		console.log("counter obj = ", counter);
	};
	return (
		<div>
			<h1>Progress Status</h1>
			<hr />
			<div className="progress-status-container">
				{data.map((val, idx) => {
					return (
						<div key={idx} className="progress-status">
							{displayProgress(
								val.progressResponse[
									val.progressResponse.length - 1
								],
								val
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BatchData;
