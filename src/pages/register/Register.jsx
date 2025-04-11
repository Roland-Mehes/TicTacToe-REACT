import React from 'react';
import styles from './register.module.css';
import XOLogo from '../../components/XOLogo';

const Register = () => {
  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <div>Input Field and container</div>
      <div>Let start button</div>
    </div>
  );
};

export default Register;
