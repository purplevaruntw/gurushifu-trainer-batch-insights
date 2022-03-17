import React from "react";
import "./Button.css";

const Button = ({ value, onClickFunction }) => {
	return (
		<span
			value={value}
			onClick={onClickFunction}
			data-testid="batch-insights-btn"
			className="clickable"
		>
			{value}
		</span>
	);
};

export default Button;
