import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
      <ul>
        {history.map((_, move) => {
          <li key={move}>
            <button
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}>{move === 0 ? 'Go to game Start' : `Go to move #${move}`}</button>
          </li>;
        })}
      </ul>
  );
};

export default History;