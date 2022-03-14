import "./App.css";
import Button from "./components/Button/Button";

const testFunction = () => {
	alert("hello");
};

function App() {
	return (
		<div className="App">
			<Button value="Batch Insights" onClickFunction={testFunction} />
		</div>
	);
}
export default App;
