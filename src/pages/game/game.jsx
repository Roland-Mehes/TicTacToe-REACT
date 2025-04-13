import React from 'react';
import styles from './game.module.css';
import Board from './components/Board/Board';
import GameHeader from './components/GameHeader/gameHeader';
import Footer from './components/Footer/Footer';

const Game = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.header}>
        <GameHeader></GameHeader>
      </div>
      <Board></Board>
      <Footer />
    </div>
  );
};

export default Game;
