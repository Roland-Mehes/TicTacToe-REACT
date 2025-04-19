import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // I Could make here an Object inside one useState to prevent duplication , but i will imporive it later. Now its better for me to debug :)
  const [currentPlayer, setCurrentPlayer] = useState('X'); // the Player who takes the actual turn , X Goes allways 1st.
  const [boardCells, setBoardCells] = useState(Array(9).fill(null)); // Actual Board
  const [isWinner, setIsWinner] = useState(false); // Conditional if there is a winner or no
  const [userName, setUserName] = useState(''); // The username got from Register.jsx
  const [aPlayerMarker, setAPlayerMarker] = useState('O'); // The selected marker from markerSwitcher.jsx
  const [aPlayerScore, setAPlayerScore] = useState(0); // First player score
  const [bPlayerScore, setBPlayerScore] = useState(0); // Second Player score
  const [tieMatchNumber, setTieMatchNumber] = useState(0); // Tie match score
  const [gameMode, setGameMode] = useState('cpu'); // Tie match score

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
        setAPlayerScore,
        bPlayerScore,
        setBPlayerScore,
        tieMatchNumber,
        setTieMatchNumber,
        gameMode,
        setGameMode,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook, to extract the data easy
// eslint-disable-next-line react-refresh/only-export-components
export const useGameContext = () => useContext(GameContext);
