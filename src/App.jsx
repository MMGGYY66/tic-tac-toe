import React, {useState} from "react";
import Board from "./components/Board.jsx";
import './styles/root.scss';
import History from "./components/History.jsx";

import { calculateWinner } from "./helpers.jsx";

const App = () => {
  const [history, setHistory] = useState([{board: Array(9).fill(null), isXNext: true}]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  let message = winner ? `Winner is ${winner}` : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, index) => {
        if (index === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1)
  };

  const moveTo = (move) => {
    setCurrentMove(move)
  }

  return (
    <div className="app">
      <h1>Welcome to Tic Tac Toe Game!</h1>
      <h2 className="message">{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} />
    </div>
  );
};

export default App;
