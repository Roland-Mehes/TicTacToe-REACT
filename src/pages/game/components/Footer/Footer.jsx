import React from 'react';
import styles from './footer.module.css';
import { useGameContext } from '../../../../Context/GameContext';

const Footer = () => {
  const { userName, aPlayerScore, bPlayerScore, tieMatchNumber } =
    useGameContext();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.scoreContainer}>
        <div className={styles.firstPlayer}>
          X ({userName}) <h2>{aPlayerScore}</h2>
        </div>
        <div className={styles.secondPlayer}>
          O (CPU) <h2>{bPlayerScore}</h2>
        </div>
      </div>

      <div className={styles.tieContainer}>
        TIES <h2>{tieMatchNumber}</h2>
      </div>
    </div>
  );
};

export default Footer;
