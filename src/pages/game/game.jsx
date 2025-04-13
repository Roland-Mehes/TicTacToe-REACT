import React from 'react';
import styles from './game.module.css';
import Board from './components/Board';
import GameHeader from './components/gameHeader';

const Game = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <GameHeader></GameHeader>
      </div>
      <Board></Board>
      <h3>Footer</h3>
    </div>
  );
};

export default Game;
