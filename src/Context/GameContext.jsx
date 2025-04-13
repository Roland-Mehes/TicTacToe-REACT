import React, { createContext, useState, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [boardCells, setBoardCells] = useState(Array(9).fill(null));
  const [isWinner, setIsWinner] = useState(false);

  return (
    <GameContext.Provider
      value={{
        currentPlayer,
        setCurrentPlayer,
        boardCells,
        setBoardCells,
        isWinner,
        setIsWinner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook, to extract the data easy
export const useGameContext = () => useContext(GameContext);
