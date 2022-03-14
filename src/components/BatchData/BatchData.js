import React, { useEffect } from "react";

const BatchData = ({ data }) => {
	useEffect(() => {});
	return (
		<div>
			<h1>batch data</h1>
			{data.map((val, idx) => {
				return (
					<div>
						<h1>email = {val.emailId}</h1>
						<h1>
							training camp ={" "}
							{
								val.progressResponse[val.progressResponse.length - 1]
									.projectName
							}
						</h1>
					</div>
				);
			})}
		</div>
	);
};

export default BatchData;
