import React, { useState } from 'react';
import Board from './components/Board.jsx';
import './styles/root.scss';
import StatusMessage from './components/StatusMessage.jsx';
import History from './components/History.jsx';
import { calculateWinner } from './helpers.jsx';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
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
    setCurrentMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe Game!</h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={() => {
          onNewGame();
        }}
        className="new-game"
      >
        START NEW GAME
      </button>
      <p className="footer">
        &copy; created by{' '}
        <a href="https://github.com/MMGGYY66" target="_blank">
          Mohamed Gamil Eldimardash
        </a>
      </p>
      <History history={ history }
        moveTo={ moveTo }
        currentMove={ currentMove } />
    </div>
  );
};

export default App;
