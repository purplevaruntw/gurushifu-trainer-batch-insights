import Button from "./Button";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const mockFunction = jest.fn();

describe("basic rendering", () => {
	it("should render batch insights button", () => {
		const button = renderer.create(<Button value={"Batch Insights"} />);
		expect(button).toMatchSnapshot();
	});
});
describe("checking basic functionality", () => {
	it("should call onclick function when button is clicked", () => {
		render(
			<Button value={"Batch Insights"} onClickFunction={mockFunction} />
		);
		const batchInsightsButton = screen.getByTestId("batch-insights-btn");
		fireEvent.click(batchInsightsButton);
		expect(mockFunction).toBeCalled();
	});
});
