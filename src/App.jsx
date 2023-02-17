import React from "react";
import Board from "./components/Board.jsx";
import './styles/root.scss';

export default () => (
  <div className="app">
    <h1>Welcome to Tic Tac Toe Game!</h1>
    <Board />
  </div>
);
