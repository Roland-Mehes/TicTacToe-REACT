import React from 'react';
import styles from './game.module.css';
import Board from './components/Board/Board';
import GameHeader from './components/Header/gameHeader';
import Footer from './components/Footer/Footer';

const Game = () => {
  return (
    <div className={styles.mainContainer}>
      <GameHeader></GameHeader>
      <Board></Board>
      <Footer />
    </div>
  );
};

export default Game;
