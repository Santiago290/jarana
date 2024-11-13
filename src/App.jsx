import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;