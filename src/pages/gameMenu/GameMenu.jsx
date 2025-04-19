import { useNavigate } from 'react-router-dom';
import styles from './gameMenu.module.css';
import XOLogo from '../../components/XOLogo';
import Button from '../../components/Button';
import MarkerSwitcher from './components/MarkerSwitcher';

const GameMenu = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/tic-tac-toe`);
  };

  return (
    <div className={styles.mainContainer}>
      <XOLogo></XOLogo>
      <MarkerSwitcher></MarkerSwitcher>
      <Button onClick={handleOnClick}>NEW GAME (VS CPU)</Button>
    </div>
  );
};

export default GameMenu;
