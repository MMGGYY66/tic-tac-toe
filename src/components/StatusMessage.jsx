import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMoreMoves = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMoreMoves && `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMoreMoves && "'X' and 'O' tied"}
    </h2>
  );
};

export default StatusMessage;
