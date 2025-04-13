import React from 'react';
import styles from './footer.module.css';
import X from '../../../../assets/X';
import O from '../../../../assets/O';

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.scoreContainer}>
        <div className={styles.firstPlayer}>
          X (ALEX VISINESCU) <h2>10</h2>
        </div>
        <div className={styles.secondPlayer}>
          O (CPU) <h2>3</h2>
        </div>
      </div>

      <div className={styles.tieContainer}>
        TIES <h2>2</h2>
      </div>
    </div>
  );
};

export default Footer;
