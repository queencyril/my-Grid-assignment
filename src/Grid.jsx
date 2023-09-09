import { range } from "./utils";

function Grid({ rowNumber, colNumber }) {
  return (
    <div className="grids">
      {range(0, rowNumber).map((indexRow) => {
        return (
          <div className="rows" key={indexRow}>
            {range(0, colNumber).map((indexCol) => {
              return <div className="cols" key={indexCol}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;