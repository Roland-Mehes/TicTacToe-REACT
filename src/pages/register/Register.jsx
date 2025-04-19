import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import XOLogo from '../../components/XOLogo';
import CustomForm from '../../components/CustomForm';
import Button from '../../components/Button';
import { useGameContext } from '../../Context/GameContext';

const Register = () => {
  const { userName, setUserName } = useGameContext();
  const navigate = useNavigate();

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
        onUserNameChange={(name) => setUserName(name)}
        onSubmit={handleSubmit}
      ></CustomForm>

      <Button onClick={handleSubmit}>LET'S START</Button>
    </div>
  );
};

export default Register;
