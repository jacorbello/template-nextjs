import Table from "@/components/table";
import { render } from "@testing-library/react";

const sampleData: (string | JSX.Element)[][] = [
  [<code>Test</code>, "description"],
];
const sampleTextData: string[][] = [["test", "description"]];

describe("<Table />", () => {
  it("renders a table with the proper headers", () => {
    const { getByText } = render(
      <Table head={["col1", "col2"]} rows={sampleData} />
    );
    expect(getByText("col1")).toBeInTheDocument();
    expect(getByText("col2")).toBeInTheDocument();
  });

  it("renders a table with the content visible", () => {
    const { getByText, getByTestId } = render(
      <Table head={["col1", "col2"]} rows={sampleTextData} />
    );
    expect(getByTestId("row-0")).toBeInTheDocument();
    expect(getByText(sampleTextData[0][0])).toBeInTheDocument();
    expect(getByText(sampleTextData[0][1])).toBeInTheDocument();
  });

  it("supports JSX Elements in the table rows", () => {
    const { getByTestId, getByText } = render(
      <Table head={["col1", "col2"]} rows={sampleData} />
    );

    expect(getByTestId("row-0")).toBeInTheDocument();
    expect(getByText("Test")).toBeInTheDocument();
    expect(getByText("description")).toBeInTheDocument();
  });
});
