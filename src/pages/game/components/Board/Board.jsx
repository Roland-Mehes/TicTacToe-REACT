import styles from './board.module.css';
import X from '../../../../assets/X';
import O from '../../../../assets/O';
import { useGameContext } from '../../../../Context/GameContext';
import { useEffect } from 'react';
import { winningCombinations } from '../../utils/winningCombinations';

// currentPlayer = the player who has to place marker

const Board = () => {
  const {
    boardCells,
    setBoardCells,
    currentPlayer,
    setCurrentPlayer,
    isWinner,
    setIsWinner,
  } = useGameContext();

  // WIN CONDITION CHECK
  useEffect(() => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (
        boardCells[a] &&
        boardCells[a] === boardCells[b] &&
        boardCells[a] === boardCells[c]
      ) {
        setIsWinner(true);

        console.log('Winner : ' + boardCells[a]);
      }
    }
  }, [boardCells]);

  // BOARD CONTROLS
  const handleClick = (e) => {
    const newBoard = [...boardCells];

    // If there is a winner or the board has already an X or O do nothing
    if (isWinner || boardCells[e] !== null) return;

    // Adding content in cells basaed on currentPlayer
    newBoard[e] = currentPlayer;
    setBoardCells(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div className={styles.cellContainer}>
      {boardCells.map((cell, idx) => (
        <div onClick={() => handleClick(idx)} className={styles.cell} key={idx}>
          {cell === 'X' ? (
            <X width={'79px'} height={'79px'} fill={'#008AFF'} />
          ) : cell === 'O' ? (
            <O width={'79px'} height={'79px'} fill={'#FFAA00'} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Board;
