import React, { useState } from 'react';
import styles from './game.module.css';
import Board from './components/Board/Board';
import GameHeader from './components/Header/gameHeader';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { boardReset } from './utils/boardReset';

import { useGameContext } from '../../Context/GameContext';

const Game = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setBoardCells, setIsWinner } = useGameContext();

  const handleOnConfirm = () => {
    setBoardCells(boardReset);
    setIsWinner(false);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.mainContainer}>
      <GameHeader setIsModalOpen={setIsModalOpen}></GameHeader>
      <Board></Board>
      <Footer />
      {isModalOpen && (
        <Modal
          title={'title'}
          subtitle={'subtitle'}
          confirmText={'confirmText'}
          cancelText={'cancelText'}
          onConfirm={() => handleOnConfirm()}
          onCancel={() => setIsModalOpen(false)}
        ></Modal>
      )}
    </div>
  );
};

export default Game;
