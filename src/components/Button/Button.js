import React from "react";
import "./Button.css";

const Button = ({ value, onClickFunction }) => {
	return (
		<button
			value={value}
			onClick={onClickFunction}
			data-testid="batch-insights-btn"
		>
			{value}
		</button>
	);
};

export default Button;
