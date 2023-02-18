import React, {useState} from "react";
import Square from "./Square";

const Board = ({ board, handleSquareClick, winningSquares }) => {
  const renderSquarePos = position => {
    const isWinningSquares = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
        isWinningSquares={isWinningSquares}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquarePos(0)}
        {renderSquarePos(1)}
        {renderSquarePos(2)}
      </div>
      <div className="board-row">
        {renderSquarePos(3)}
        {renderSquarePos(4)}
        {renderSquarePos(5)}
      </div>
      <div className="board-row">
        {renderSquarePos(6)}
        {renderSquarePos(7)}
        {renderSquarePos(8)}
      </div>
    </div>
  );
};

export default Board;