import React, { useEffect } from "react";
import "./BatchData.css"
const BatchData = ({ data }) => {
	const displayProgress = (progress) =>{
		return <h1>{progress.completionStatus}</h1>
		if (progress.projectName==="trainingCamp"){

		}
		else {

		}
	}
	return (
		<div >
			<h1>Progress Status</h1>
			<hr/>
		<div className="progress-status-container">

		{data.map((val, idx) => {
				return (
					<div key={idx} className="progress-status">
						{displayProgress(val.progressResponse[val.progressResponse.length - 1])}

					</div>
				);
			})}
		</div>
		</div>
	);
};

export default BatchData;
