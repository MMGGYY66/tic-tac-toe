import React, {useState} from "react";
import Square from "./Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const handleSquareClick = (position) => {
    if (board[position]) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, index) => {
        if (index === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsXNext(prev => !prev);
  };

  const renderSquarePos = (position) => {
    return (<Square
      value={board[position]}
      onClick={() =>
        handleSquareClick(position)
      }
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
  )
}

export default Board;