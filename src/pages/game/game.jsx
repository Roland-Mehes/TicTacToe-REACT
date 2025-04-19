import React, { useState } from 'react';
import styles from './game.module.css';
import Board from './components/Board/Board';
import GameHeader from './components/Header/gameHeader';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { boardReset } from './utils/boardReset';
import { useGameContext } from '../../Context/GameContext';
import { GetModalContent } from './utils/modalUtils';

const Game = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setBoardCells, setIsWinner } = useGameContext();
  const [modalType, setModalType] = useState('win');

  const handleOnConfirm = () => {
    setBoardCells(boardReset);
    setIsWinner(false);
    setIsModalOpen(false);
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const modalContent = GetModalContent(modalType);

  return (
    <div className={styles.mainContainer}>
      <GameHeader setIsModalOpen={openModal}></GameHeader>
      <Board setIsModalOpen={openModal}></Board>
      <Footer />
      {isModalOpen && (
        <Modal
          title={modalContent.title}
          subtitle={modalContent.subtitle}
          confirmText={modalContent.confirmText}
          cancelText={modalContent.cancelText}
          SvgComponent={modalContent.SvgComponent}
          svgColor={modalContent.svgColor}
          onConfirm={handleOnConfirm}
          onCancel={() => setIsModalOpen(false)}
        ></Modal>
      )}
    </div>
  );
};

export default Game;
