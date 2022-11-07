import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './Menu';
import HomePage from './HomePage';
import DriftPage from './DriftPage';
import TimeAttackPage from './TimeAttackPage';
import ForzaPage from './ForzaPage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/drift" element={<DriftPage/>} />
            <Route path="/timeattack" element={<TimeAttackPage/>} />
            <Route path="/forza" element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
