import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './gameMenu.module.css';
import XOLogo from '../../components/XOLogo';
import Button from '../../components/Button';
import MarkerSwitcher from '../../components/MarkerSwitcher';

const GameMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = location.state?.userName;

  // Fallback in case of direct URL access
  useEffect(() => {
    if (!userName) {
      navigate('/');
    }
  }, [userName, navigate]);

  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <MarkerSwitcher></MarkerSwitcher>
      <Button>NEW GAME (VS CPU)</Button>
    </div>
  );
};

export default GameMenu;
