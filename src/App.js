import "./App.css";
import Button from "./components/Button/Button";
import config from "./api/config";
import axios from "axios";
import { useEffect, useState } from "react";
import BatchData from "./components/BatchData/BatchData";
import Header from "./components/Header/Header";

function App() {
	const [data, setData] = useState(null);
	const [showButton, setShowButton] = useState(true);
	const getData = async () => {
		const url = config.API.batchInsights;
		const { data } = await axios.get(url);
		setData(data);
	};
	const showBatchInsights = () => {
		getData();
		setShowButton(false);
	};
	useEffect(() => {
		document.title = "Batch Insights";
	});
	return (
		<div className="App">
			<Header />
			{showButton && (
				<Button
					value="Batch Insights"
					onClickFunction={showBatchInsights}
				/>
			)}
			{data ? <BatchData data={data.body} /> : ""}
		</div>
	);
}
export default App;
