import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Revandra from './pages/Revandra';
import Adit from './pages/Adit';
import Haikal from './pages/Haikal';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Revandra" element={<Revandra />} />
        <Route path="/Adit" element={<Adit />} />
        <Route path="/Haikal" element={<Haikal />} />
      </Routes>
    </Router>
  )
}

export default App
