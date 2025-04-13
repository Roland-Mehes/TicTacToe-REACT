import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import XOLogo from '../../components/XOLogo';
import CustomForm from '../../components/CustomForm';
import Button from '../../components/Button';

const Register = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  const handleUserNameChange = (name) => {
    setUserName(name);
  };

  const handleSubmit = () => {
    if (!userName) {
      return null;
    } else {
      navigate(`gameMenu`, { state: { userName } });
    }
  };

  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <CustomForm
        userName={userName}
        onUserNameChange={handleUserNameChange}
        onSubmit={handleSubmit}
      ></CustomForm>

      <Button onClick={handleSubmit}>LET'S START</Button>
    </div>
  );
};

export default Register;
