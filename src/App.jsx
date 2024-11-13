import './App.css';
import { Routes, Route, Navigate, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;