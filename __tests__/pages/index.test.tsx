import Home from "@/pages/index";
import { render } from "@testing-library/react";

describe("/", () => {
  it("should render the page", () => {
    const { getByText } = render(<Home />);

    expect(getByText("NextJS Template")).toBeInTheDocument();
  });
});
