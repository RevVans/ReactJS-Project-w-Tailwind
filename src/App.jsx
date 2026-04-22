import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Revandra from './pages/Revandra';
import Adit from './pages/Adit';
import Haikal from './pages/Haikal';
import ProductPage from './pages/ProductPage';
import TesEffect from './pages/TesEffect';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Revandra" element={<Revandra />} />
        <Route path="/Adit" element={<Adit />} />
        <Route path="/Haikal" element={<Haikal />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/TesEffect" element={<TesEffect />} />
      </Routes>
    </Router>
  )
}

export default App
