import React from 'react';
import styles from './register.module.css';
import XOLogo from '../../components/XOLogo';
import CustomForm from '../../components/CustomForm';
import Button from '../../components/Button';

const Register = () => {
  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <CustomForm></CustomForm>

      <Button />
    </div>
  );
};

export default Register;
