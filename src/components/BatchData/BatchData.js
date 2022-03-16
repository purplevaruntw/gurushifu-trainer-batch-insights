import React from "react";
import TableRow from "../TableRow/TableRow";
import "./BatchData.css";

const BatchData = ({ data }) => {
	const getProjectName = {"rectangle":"Rectangle", "trainingCamp":"Training Camp", "make-me-oo":"Make Me OO"};
	const getRequirement = {"Rectangle":3,"Make Me OO":4};
	var counter = new Map();
	const batchProjectName = "rectangle";
	
	const getCount = (fullName) => {
		counter.set(fullName,counter.get(fullName)+1);
	}
	
	const setInitialCount = (projectName) => {
		const prefix = getProjectName[projectName];
		var fullName = "";
		fullName = "Training Camp";
		counter.set(fullName,0);
		
		for (let i=0;i<getRequirement[prefix];i++)
		{
			fullName = prefix + " - Requirement " + (i + 1);
			counter.set(fullName,0);
		}
		fullName = prefix + "- Completed"
		counter.set(fullName,0);
	}
	
	setInitialCount(batchProjectName);
	
	const getFullName = (progress) => {
		const prefix = getProjectName[progress.projectName];
		var fullName = "";
		if (prefix==="Training Camp"){
			fullName = "Training Camp"
		}
		else if (prefix!=="Training Camp" && progress.completionStatus === "Completed"){
			fullName = prefix + "- Completed"
		}
		else{
			fullName = prefix + " - Requirement " + (progress.requirementNumber + 1)
		}
		return fullName
	}
	
	const displayProgress = (progress) => {
		const fullName = getFullName(progress);
		const count = getCount(fullName);
		console.log(count);
		//counter.set(fullName, count);
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
							{}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BatchData;
