import React from "react";
import Board from "./Board.jsx";

const Game = () => {
  return (
    <>
      <div className="board">
        <Board />
      </div>
      <div className="info">
        <ol></ol>
      </div>
    </>
  );
};

export default Game;
