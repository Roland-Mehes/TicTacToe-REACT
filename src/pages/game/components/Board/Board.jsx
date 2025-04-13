import React from 'react';
import styles from './board.module.css';

const Board = () => {
  const boardCells = Array(9).fill('x');

  return (
    <div className={styles.cellContainer}>
      {boardCells.map((cell, idx) => (
        <div className={styles.cell} key={idx}>
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
