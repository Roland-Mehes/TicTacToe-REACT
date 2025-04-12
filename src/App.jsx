import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import GameMenu from './pages/gameMenu/GameMenu';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="gameMenu" element={<GameMenu />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
