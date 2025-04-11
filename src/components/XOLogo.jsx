import React from 'react';
import styles from './XOLogo.module.css';

const XOLogo = () => {
  return (
    <div>
      <h1>
        <span className={styles.X}>X</span>
        <span className={styles.O}>O</span>
      </h1>
    </div>
  );
};

export default XOLogo;
