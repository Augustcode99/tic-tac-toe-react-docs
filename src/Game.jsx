import React from "react";
import Board from "./Board.jsx";

const Game = () => {
  return (
    <>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </>
  );
};

export default Game;
