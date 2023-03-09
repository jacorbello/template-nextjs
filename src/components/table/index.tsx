type ITable = {
  head: string[];
  rows: (string | JSX.Element)[][];
};

const Table = ({ head, rows }: ITable) => {
  return (
    <table className="m-4">
      <thead className="border-b-2 border-black">
        <tr>
          {head &&
            head.map((el) => (
              <td key={`head-${el}`} className="text-xl">
                {el}
              </td>
            ))}
        </tr>
      </thead>
      <tbody>
        {rows &&
          rows.map((row, index) => (
            <tr key={index} data-testid={`row-${index}`}>
              {row.map((el) => (
                <td className="py-1" key={`row-${el}`}>
                  {el}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
