import React, { useState } from 'react';
import styles from './game.module.css';
import Board from './components/Board/Board';
import GameHeader from './components/Header/gameHeader';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { BoardReset } from './utils/boardReset';
import { useGameContext } from '../../Context/GameContext';
import { GetModalContent } from './utils/modalUtils';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setBoardCells, setIsWinner, setCurrentPlayer } = useGameContext();
  const [modalType, setModalType] = useState('win');
  const navigate = useNavigate();

  const handleOnConfirm = () => {
    setBoardCells(BoardReset);
    setIsWinner(false);
    setCurrentPlayer('X');
    setIsModalOpen(false);
    if (modalType === 'restart') {
      navigate('/gameMenu');
    }
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
