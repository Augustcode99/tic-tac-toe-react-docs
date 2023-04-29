import React from "react";
import Board from "./Board.jsx";
import { useState } from "react";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  const handlePlay = (nextSquares) => {};
  return (
    <>
      <div className="board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="info">
        <ol></ol>
      </div>
    </>
  );
};

export default Game;
