import { render, screen } from "@testing-library/react";
import { describe, it } from "@jest/globals";
import Header from "./Header";

describe("<Header/> Component", () => {
	it("shows title", () => {
		render(<Header />);
		screen.getByText("LEARNING LANGUAGE");
	});
});
