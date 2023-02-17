import React, {useState} from "react";
import Board from "./components/Board.jsx";
import './styles/root.scss';
import { calculateWinner } from "./helpers.jsx";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  let message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
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

  return (
    <div className="app">
      <h1>Welcome to Tic Tac Toe Game!</h1>
      <h2 className="message">{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
