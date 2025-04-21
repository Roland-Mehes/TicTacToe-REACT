import styles from './board.module.css';
import X from '../../../../assets/X';
import O from '../../../../assets/O';
import XHover from '../../../../assets/XHover';
import OHover from '../../../../assets/OHover';
import { useGameContext } from '../../../../Context/GameContext';
import { useEffect, useState } from 'react';
import { computerMove } from '../../utils/computerMove';
import { checkGameState } from '../../utils/checkGameState';

// Main board component
const Board = ({ setIsModalOpen }) => {
  const [hoverIndex, setHoverIndex] = useState(null); // Track which cell is hovered
  const [isBoardLocked, setIsBoardLocked] = useState(false); // Prevent interaction during AI move

  // Get all necessary states and setters from GameContext
  const {
    boardCells,
    setBoardCells,
    currentPlayer,
    setCurrentPlayer,
    isWinner,
    setIsWinner,
    aPlayerMarker,
    gameMode,
    setAPlayerScore,
    setBPlayerScore,
    setTieMatchNumber,
  } = useGameContext();

  // Check for win/tie condition after every board update
  useEffect(() => {
    checkGameState(
      boardCells,
      aPlayerMarker,
      setIsWinner,
      setIsModalOpen,
      setAPlayerScore,
      setBPlayerScore,
      setTieMatchNumber
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardCells]);

  // AI (CPU) makes a move automatically if it's their turn
  useEffect(() => {
    const isBoardEmpty = boardCells.every((cell) => cell === null); // Check if it's the first move
    const isComputerTurn = currentPlayer !== aPlayerMarker; // True if it's CPU's turn
    const isCpuGame = gameMode === 'cpu'; // Confirm we are in CPU game mode

    // CPU plays if it's their turn and game is still going
    if (isCpuGame && !isWinner && isComputerTurn) {
      setIsBoardLocked(true); // Lock player input during CPU move
      const delay = isBoardEmpty ? 500 : 400; // First move has slightly more delay
      const timer = setTimeout(() => {
        computerMove(
          boardCells,
          currentPlayer,
          setBoardCells,
          setCurrentPlayer
        );
        setIsBoardLocked(false); // Unlock player input after CPU move
      }, delay);

      // Clear timeout if component unmounts
      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardCells, currentPlayer, gameMode, aPlayerMarker, isWinner]);

  useEffect(() => {
    if (boardCells.every((cell) => cell === null)) {
      setIsBoardLocked(false);
    }
  }, [boardCells]);

  // Handle user clicking on a cell
  const handleClick = (index) => {
    // Don't allow move if someone won, the board is locked, or cell already taken
    if (isWinner || boardCells[index] !== null || isBoardLocked) return;

    const newBoard = [...boardCells];
    newBoard[index] = currentPlayer;

    setBoardCells(newBoard); // Update board
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X'); // Toggle turn
  };

  return (
    <div className={styles.cellContainer}>
      {boardCells.map((cell, idx) => (
        <div
          onClick={() => handleClick(idx)} // Handle cell click
          className={styles.cell}
          key={idx}
          onMouseEnter={() => setHoverIndex(idx)} // Track hover for UI
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Render X, O, or Hover effect depending on cell state */}
          {cell === 'X' ? (
            <X width={'79px'} height={'79px'} fill={'#008AFF'} />
          ) : cell === 'O' ? (
            <O width={'79px'} height={'79px'} fill={'#FFAA00'} />
          ) : hoverIndex === idx ? (
            currentPlayer === 'X' ? (
              <XHover />
            ) : (
              <OHover />
            )
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Board;
