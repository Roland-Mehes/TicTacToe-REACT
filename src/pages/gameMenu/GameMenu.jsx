import { useNavigate } from 'react-router-dom';
import styles from './gameMenu.module.css';
import XOLogo from '../../components/XOLogo';
import Button from '../../components/Button';
import MarkerSwitcher from './components/MarkerSwitcher';
import { useGameContext } from '../../Context/GameContext';

const GameMenu = () => {
  const navigate = useNavigate();
  const { setGameMode } = useGameContext();

  const handleOnClick = (level) => {
    setGameMode({
      CPU_easy: level === 'easy',
      CPU_medium: level === 'medium',
      CPU_hard: level === 'hard',
    });
    navigate(`/tic-tac-toe`);
  };

  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <MarkerSwitcher></MarkerSwitcher>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <Button onClick={() => handleOnClick('easy')}>EASY (VS CPU)</Button>
        <Button onClick={() => handleOnClick('medium')}>MEDIUM (VS CPU)</Button>
        <Button onClick={() => handleOnClick('hard')}>HARD (VS CPU)</Button>
      </div>
    </div>
  );
};

export default GameMenu;
