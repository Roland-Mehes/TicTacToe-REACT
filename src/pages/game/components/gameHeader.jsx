import React from 'react';
import X from '../../../assets/X';
import O from '../../../assets/O';
import Restart from '../../../assets/Restart';
import styles from './gameHeader.module.css';

const GameHeader = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <X width={'35px'} height={'35px'} fill="#008AFF" />
        <O width={'35px'} height={'35px'} fill="#ffaa00" />
      </div>

      <div className={styles.scoreDisplay}>
        <X width={'20px'} height={'20px'} /> <h3>TURN</h3>
      </div>

      <div className={styles.restartContainer}>
        <Restart width={'20px'} height={'20px'} fill={'#0e2c42'} />
      </div>
    </div>
  );
};

export default GameHeader;
