import { winningCombinations } from './winningCombinations';

const evaluateWinner = (board) => {
  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // 'X' or 'O'
    }
  }
  return board.every((cell) => cell !== null) ? 'tie' : null;
};

const minimax = (board, depth, isMaximizing, aiMarker, humanMarker) => {
  const winner = evaluateWinner(board);
  if (winner === aiMarker) return 10 - depth;
  if (winner === humanMarker) return depth - 10;
  if (winner === 'tie') return 0;

  const scores = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = isMaximizing ? aiMarker : humanMarker;
      const score = minimax(
        board,
        depth + 1,
        !isMaximizing,
        aiMarker,
        humanMarker
      );
      scores.push({ index: i, score });
      board[i] = null;
    }
  }

  return isMaximizing
    ? Math.max(...scores.map((s) => s.score))
    : Math.min(...scores.map((s) => s.score));
};

export const computerMoveHard = (
  board,
  computerMarker,
  setBoardCells,
  setCurrentPlayer
) => {
  const playerMarker = computerMarker === 'X' ? 'O' : 'X';
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      const newBoard = [...board];
      newBoard[i] = computerMarker;
      const score = minimax(newBoard, 0, false, computerMarker, playerMarker);

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  if (move !== undefined) {
    const newBoard = [...board];
    newBoard[move] = computerMarker;
    setBoardCells(newBoard);
    setCurrentPlayer(playerMarker);
  }
};
