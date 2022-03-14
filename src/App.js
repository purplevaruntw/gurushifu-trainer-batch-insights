import "./App.css";
import Button from "./components/Button/Button";
import config from "./api/config";
import axios from "axios";
import { useState } from "react";
import BatchData from "./components/BatchData/BatchData";

function App() {
	const [data, setData] = useState(null);
	const getData = async () => {
		const url = config.API.batchInsights;
		const { data } = await axios.get(url);
		setData(data);
	};
	const showBatchInsights = () => {
		getData();
		console.log(data);
	};

	return (
		<div className="App">
			<Button value="Batch Insights" onClickFunction={showBatchInsights} />
			{data ? <BatchData data={data.body.Items} /> : ""}
		</div>
	);
}
export default App;
