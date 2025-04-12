import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './gameMenu.module.css';

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
    <div className={styles.mainContainer}>Wellcome in GameMenu {userName}</div>
  );
};

export default GameMenu;
