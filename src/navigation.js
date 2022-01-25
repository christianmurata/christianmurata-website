import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Stack from './pages/stack';
import Rubiks from './components/rubiks';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Portfolio from './pages/portfolio';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Rubiks />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/stack" exact element={<Stack />} />
        <Route path="/portfolio" exact element={<Portfolio />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default Navigation;