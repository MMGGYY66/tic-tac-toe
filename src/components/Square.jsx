import React from 'react';

const Square = ({ value, onClick, isWinningSquares }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        backgroundColor: isWinningSquares ? 'yellow' : 'lightgreen',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
