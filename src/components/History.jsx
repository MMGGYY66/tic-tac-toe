import React from "react";

const History = ({history, moveTo}) => {
  return (
    <ul>
      {
        history.map((_, move) => {
        <li key={move}>
          <button type="button" className="history" onClick={() => {moveTo(move)}}>{move === 0 ? 'Go to game Start' : `Go to move #${move}`}</button>
       </li>
        })
      }
   </ul>
  )
}

export default History;