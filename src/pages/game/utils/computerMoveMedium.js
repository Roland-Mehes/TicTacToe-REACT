import { winningCombinations } from './winningCombinations';

export const computerMoveMedium = (
  board,
  computerMarker,
  setBoardCells,
  setCurrentPlayer
) => {
  const playerMarker = computerMarker === 'X' ? 'O' : 'X';

  // 1. Try to win
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [board[a], board[b], board[c]];
    if (
      values.filter((val) => val === computerMarker).length === 2 &&
      values.includes(null)
    ) {
      const moveIndex = combo[values.indexOf(null)];
      const newBoard = [...board];
      newBoard[moveIndex] = computerMarker;
      setBoardCells(newBoard);
      setCurrentPlayer(playerMarker);
      return;
    }
  }

  // 2. Block opponent
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    const values = [board[a], board[b], board[c]];
    if (
      values.filter((val) => val === playerMarker).length === 2 &&
      values.includes(null)
    ) {
      const moveIndex = combo[values.indexOf(null)];
      const newBoard = [...board];
      newBoard[moveIndex] = computerMarker;
      setBoardCells(newBoard);
      setCurrentPlayer(playerMarker);
      return;
    }
  }

  // 3. Pick random move
  const availableMoves = board
    .map((cell, idx) => (cell === null ? idx : null))
    .filter((val) => val !== null);

  if (availableMoves.length === 0) return;

  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  const chosenMove = availableMoves[randomIndex];
  const newBoard = [...board];
  newBoard[chosenMove] = computerMarker;

  setBoardCells(newBoard);
  setCurrentPlayer(playerMarker);
};
