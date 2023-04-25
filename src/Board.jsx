import Square from "./Square.jsx";
import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();
    newSquares[i] = "X";
    setSquares(newSquares);
  };

  return (
    <>
      <div className="Row">
        <Square
          value={squares[0]}
          squareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          squareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          squareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="Row">
        <Square
          value={squares[3]}
          squareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          squareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          squareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="Row">
        <Square
          value={squares[6]}
          squareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          squareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          squareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

export default Board;
