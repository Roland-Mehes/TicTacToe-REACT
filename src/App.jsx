import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import GameMenu from './pages/gameMenu/GameMenu';
import Game from './pages/game/game';
import { GameProvider } from './Context/GameContext';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route index element={<Register />} />
          <Route path="gameMenu" element={<GameMenu />} />
          <Route path="tic-tac-toe" element={<Game />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
