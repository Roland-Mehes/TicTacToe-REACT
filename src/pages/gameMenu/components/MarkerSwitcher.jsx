import styles from './markerSwitcher.module.css';
import X from '../../../assets/X';
import O from '../../../assets/O';
import { useGameContext } from '../../../Context/GameContext';

const MarkerSwitcher = () => {
  const { aPlayerMarker, setAPlayerMarker } = useGameContext();

  const handleActiveButton = (marker) => {
    setAPlayerMarker(marker);
  };

  return (
    <div className={styles.mainContainer}>
      <h3>PICK YOUR MARK AS PLAYER </h3>
      <div className={styles.toggle}>
        <div
          className={`${styles.XButton} ${
            aPlayerMarker === 'X' ? styles.active : styles.inactive
          } `}
          onClick={() => handleActiveButton('X')}
        >
          <X
            width="30px"
            height="30px"
            fill={aPlayerMarker === 'X' ? '#0C2233' : ''}
          />
        </div>
        <div
          className={`${styles.OButton} ${
            aPlayerMarker === 'O' ? styles.active : styles.inactive
          }`}
          onClick={() => handleActiveButton('O')}
        >
          <O
            width="30px"
            height="30px"
            fill={aPlayerMarker === 'X' ? '' : '#0C2233'}
          />
        </div>
      </div>
      <h3>X GOES FIRST ALWAYS</h3>
    </div>
  );
};

export default MarkerSwitcher;
