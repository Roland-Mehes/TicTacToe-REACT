import React from 'react';
import styles from './Modal.module.css';
import Button from '../../../../components/Button';

const Modal = ({
  // title,
  // subtitle,
  // confirmText,
  // cancelText,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.modal}>
        <h3>Are you sure?</h3>
        <div className={styles.subtitle}>
          <h1>RESTART GAME</h1>
        </div>

        <div className={styles.buttonContainer}>
          <Button modalButton={true} onClick={onCancel}>
            NO, CANCEL
          </Button>
          <Button modalButton={true} onClick={onConfirm}>
            YES, RESTART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
