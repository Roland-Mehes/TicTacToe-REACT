import React, { useState } from 'react';
import styles from './markerSwitcher.module.css';
import X from '../assets/X';
import O from '../assets/O';

const MarkerSwitcher = () => {
  const [activeButton, setActiveButton] = useState('O');

  const handleActiveButton = (marker) => {
    setActiveButton(marker);
  };

  return (
    <div className={styles.mainContainer}>
      <h3>PICK YOUR MARK AS PLAYER</h3>
      <div className={styles.toggle}>
        <div
          className={`${styles.XButton} ${
            activeButton === 'X' ? styles.active : styles.inactive
          }`}
          onClick={() => handleActiveButton('X')}
        >
          <X
            width="30px"
            height="30px"
            fill={activeButton === 'X' ? '#0C2233' : ''}
          />
        </div>
        <div
          className={`${styles.OButton} ${
            activeButton === 'O' ? styles.active : styles.inactive
          }`}
          onClick={() => handleActiveButton('O')}
        >
          <O
            width="30px"
            height="30px"
            fill={activeButton === 'X' ? '' : '#0C2233'}
          />
        </div>
      </div>
      <h3>X GOES FIRST ALWAYS</h3>
    </div>
  );
};

export default MarkerSwitcher;
