import React from "react";
import Board from "./Board.jsx";
import { useState } from "react";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove) => {};

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <>
      <div className="board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="info">
        <ol>{moves}</ol>
      </div>
    </>
  );
};

export default Game;
