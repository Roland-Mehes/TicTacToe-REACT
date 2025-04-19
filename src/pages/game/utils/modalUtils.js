import X from '../../../assets/X';
import O from '../../../assets/O';
import { useGameContext } from '../../../Context/GameContext';

// Dinamic Content for Modal
export const GetModalContent = (modalType) => {
  const { aPlayerMarker } = useGameContext();

  switch (modalType) {
    case 'win':
      return {
        title: aPlayerMarker === 'X' ? 'YOU WON!' : 'YOU WON!',
        subtitle: 'TAKES THE ROUND',
        SvgComponent: aPlayerMarker === 'X' ? X : O,
        svgColor: aPlayerMarker === 'X' ? '#008AFF' : '#FFAA00',
        confirmText: 'NEXT ROUND',
        cancelText: 'QUIT',
      };

    case 'lose':
      return {
        title: aPlayerMarker === 'X' ? 'YOU LOST!' : 'YOU LOST!',
        subtitle: 'TAKES THE ROUND',
        SvgComponent: aPlayerMarker === 'X' ? O : X,
        svgColor: aPlayerMarker === 'X' ? '#FFAA00' : '#008AFF',
        confirmText: 'NEXT ROUND',
        cancelText: 'QUIT',
      };
    case 'tie':
      return {
        title: 'NOBODY WON!',
        subtitle: 'ROUND TIED',
        SvgComponent: null,
        confirmText: 'NEXT ROUND',
        cancelText: 'QUIT',
      };
    case 'restart':
      return {
        title: 'ARE YOU SURE?',
        subtitle: 'RESTART GAME',
        SvgComponent: null,
        confirmText: 'YES, RESTART',
        cancelText: 'NO, CANCEL',
      };
    default:
      return {
        title: 'ERROR',
        subtitle: 'Invalid modal type.',
        SvgComponent: null,
        confirmText: '',
        cancelText: '',
      };
  }
};
