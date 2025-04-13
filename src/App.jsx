import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import GameMenu from './pages/gameMenu/GameMenu';
import Game from './pages/game/game';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Register />} />
          <Route path="gameMenu" element={<GameMenu />} />
          <Route path="TicTacToe" element={<Game />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
