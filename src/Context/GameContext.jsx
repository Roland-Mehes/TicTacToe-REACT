import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // I Could make here an Object inside one useState to prevent duplication , but i will imporive it later. Now its better for me to debug :)
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [boardCells, setBoardCells] = useState(Array(9).fill(null));
  const [isWinner, setIsWinner] = useState(false);
  const [userName, setUserName] = useState('');
  const [aPlayerMarker, setAPlayerMarker] = useState('O');
  const [aPlayerScore, setAplayerScore] = useState(0);
  const [bPlayerScore, setBPlayerScore] = useState(0);
  const [tieMatchNumber, setTieMatchNumber] = useState(0);

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        boardCells,
        setBoardCells,
        isWinner,
        setIsWinner,
        userName,
        setUserName,
        aPlayerMarker,
        setAPlayerMarker,
        aPlayerScore,
        setAplayerScore,
        bPlayerScore,
        setBPlayerScore,
        tieMatchNumber,
        setTieMatchNumber,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook, to extract the data easy
// eslint-disable-next-line react-refresh/only-export-components
export const useGameContext = () => useContext(GameContext);
