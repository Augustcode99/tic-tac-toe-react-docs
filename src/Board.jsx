import "./Board.css";
import Square from "./Square.jsx";

function Board() {
  return (
    <>
      <div className="Row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="Row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="Row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default Board;
