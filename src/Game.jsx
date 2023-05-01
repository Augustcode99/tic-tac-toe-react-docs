import React from "react";
import Board from "./Board.jsx";
import { useState } from "react";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  const handlePlay = (newSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    if (currentMove % 2 === 0) {
      setXIsNext(true);
    } else {
      setXIsNext(false);
    }
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li key={move}>
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
