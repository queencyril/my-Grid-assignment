import { range } from "./utils";

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((rowIndex) => {
        return (
          <div className="row" key={rowIndex}>
            {range(0, numCols).map((colIndex) => {
              return <div className="cell" key={colIndex}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;