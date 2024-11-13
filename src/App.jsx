import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter basename="/jarana">
      <header className="m-auto font-poppins xl:w-[57%] md:w-[70%] sm:w-[85%] w-[85%]">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;