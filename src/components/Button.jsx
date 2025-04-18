import React from 'react';
import styles from './button.module.css';

const Button = ({ children, onClick, modalButton }) => {
  return (
    <button
      onClick={onClick}
      className={modalButton ? styles.custonModalButton : styles.customButton}
    >
      {children}
    </button>
  );
};

export default Button;
