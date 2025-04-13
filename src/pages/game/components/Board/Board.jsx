import styles from './board.module.css';
import X from '../../../../assets/X';
import O from '../../../../assets/O';
import { useGameContext } from '../../../../Context/GameContext';

// currentPlayer = the player who has to place marker

const Board = () => {
  const {
    boardCells,
    setBoardCells,
    currentPlayer,
    setCurrentPlayer,
    isWinner,
    // setIsWinner,
  } = useGameContext();

  const handleClick = (e) => {
    const newBoard = [...boardCells];

    // If there is a winner or the board has already an X or O do nothing
    if (isWinner || boardCells[e] !== null) return;

    // Adding content in cells basaed on currentPlayer
    if (currentPlayer === 'X') {
      newBoard[e] = <X width={'79px'} height={'79px'} fill={'#008AFF'} />;
      setBoardCells(newBoard);
      setCurrentPlayer('O');
    } else if (currentPlayer === 'O') {
      newBoard[e] = <O width={'79px'} height={'79px'} fill={'#FFAA00'} />;
      setBoardCells(newBoard);
      setCurrentPlayer('X');
    }
  };

  return (
    <div className={styles.cellContainer}>
      {boardCells.map((cell, idx) => (
        <div onClick={() => handleClick(idx)} className={styles.cell} key={idx}>
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
