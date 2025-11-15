import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Visualizations from './pages/Visualizations';
import './styles/base.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target && typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    const isJSDOM =
      typeof navigator !== 'undefined' &&
      typeof navigator.userAgent === 'string' &&
      navigator.userAgent.includes('jsdom');

    if (!isJSDOM && typeof window !== 'undefined' && typeof window.scrollTo === 'function') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="page">
      <Header />
      <main className="page__main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualizations" element={<Visualizations />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
