import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sprout,
  Menu,
  X,
  Home,
  Radar,
  CloudSun,
  PencilLine,
  Leaf,
  ShieldCheck,
  BrainCircuit,
  ChevronRight
} from 'lucide-react';

import LiveMode from './components/LiveMode';
import ManualMode from './components/ManualMode';
import LandingPage from './components/LandingPage';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const goHome = () => {
    setPage('home');
    setMenuOpen(false);
  };

  const goSelector = () => {
    setPage('selector');
    setMenuOpen(false);
  };

  const goLive = () => {
    setPage('live');
    setMenuOpen(false);
  };

  const goManual = () => {
    setPage('manual');
    setMenuOpen(false);
  };

  return (
    <div className="dashboard-app">
      {/* Header */}
      <motion.header
        className="topbar"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="topbar-inner">
          <div className="brand" onClick={goHome}>
            <div className="brand-icon-wrap">
              <Sprout className="brand-icon" size={24} />
            </div>
            <div>
              <h1>Smart Crop System</h1>
              <p>AI-driven crop recommendation platform</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <button className={`nav-btn ${page === 'home' ? 'active' : ''}`} onClick={goHome}>
              <Home size={18} />
              <span>Home</span>
            </button>

            <button className={`nav-btn ${page === 'selector' ? 'active' : ''}`} onClick={goSelector}>
              <Radar size={18} />
              <span>Analysis Hub</span>
            </button>

            <button className={`nav-btn ${page === 'live' ? 'active' : ''}`} onClick={goLive}>
              <CloudSun size={18} />
              <span>Live Mode</span>
            </button>

            <button className={`nav-btn ${page === 'manual' ? 'active' : ''}`} onClick={goManual}>
              <PencilLine size={18} />
              <span>Manual Mode</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button className="mobile-nav-item" onClick={goHome}>
                <Home size={18} />
                <span>Home</span>
              </button>
              <button className="mobile-nav-item" onClick={goSelector}>
                <Radar size={18} />
                <span>Analysis Hub</span>
              </button>
              <button className="mobile-nav-item" onClick={goLive}>
                <CloudSun size={18} />
                <span>Live Mode</span>
              </button>
              <button className="mobile-nav-item" onClick={goManual}>
                <PencilLine size={18} />
                <span>Manual Mode</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="dashboard-main">
        {page === 'home' && <LandingPage onGetStarted={goSelector} onLiveMode={goLive} onManualMode={goManual} />}

        {page === 'selector' && (
          <motion.section
            className="analysis-hub"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="section-header">
              <span className="badge">Smart Recommendation Engine</span>
              <h2>Choose Your Analysis Mode</h2>
              <p>
                Select the most suitable recommendation method based on your available data.
              </p>
            </div>

            <div className="stats-grid">
              <div className="mini-stat-card">
                <Leaf size={22} />
                <div>
                  <h4>AI Crop Suggestion</h4>
                  <p>ML-based crop prediction support</p>
                </div>
              </div>

              <div className="mini-stat-card">
                <ShieldCheck size={22} />
                <div>
                  <h4>Reliable Inputs</h4>
                  <p>Weather + soil parameter validation</p>
                </div>
              </div>

              <div className="mini-stat-card">
                <BrainCircuit size={22} />
                <div>
                  <h4>Smart Advisory</h4>
                  <p>Interactive agriculture chatbot assistance</p>
                </div>
              </div>
            </div>

            <div className="mode-grid">
              {/* Live Mode */}
              <motion.div
                className="mode-panel live-panel"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mode-top">
                  <div className="mode-badge live-badge">
                    <CloudSun size={26} />
                  </div>
                  <span className="mode-tag">Recommended for real-time usage</span>
                </div>

                <h3>Live Analysis Mode</h3>
                <p>
                  Automatically detects location and uses real-time weather details along with
                  soil inputs to provide an intelligent crop recommendation.
                </p>

                <ul className="mode-list">
                  <li>✔ Auto location detection</li>
                  <li>✔ Real-time weather support</li>
                  <li>✔ Faster recommendation workflow</li>
                  <li>✔ Best for live field demonstration</li>
                </ul>

                <button className="primary-action-btn" onClick={goLive}>
                  Start Live Analysis <ChevronRight size={18} />
                </button>
              </motion.div>

              {/* Manual Mode */}
              <motion.div
                className="mode-panel manual-panel"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mode-top">
                  <div className="mode-badge manual-badge">
                    <PencilLine size={26} />
                  </div>
                  <span className="mode-tag">Best for offline/custom data entry</span>
                </div>

                <h3>Manual Analysis Mode</h3>
                <p>
                  Enter all soil and weather parameters manually to perform custom crop analysis
                  without depending on live environmental data.
                </p>

                <ul className="mode-list">
                  <li>✔ Full parameter control</li>
                  <li>✔ Works with predefined sample data</li>
                  <li>✔ Useful for testing different scenarios</li>
                  <li>✔ Suitable for academic demonstration</li>
                </ul>

                <button className="secondary-action-btn" onClick={goManual}>
                  Start Manual Analysis <ChevronRight size={18} />
                </button>
              </motion.div>
            </div>
          </motion.section>
        )}

        {page === 'live' && (
          <motion.section
            className="tool-shell"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="tool-header">
              <button className="back-chip" onClick={goSelector}>← Back to Analysis Hub</button>
              <h2>Live Crop Recommendation</h2>
              <p>Real-time location and weather based intelligent crop analysis.</p>
            </div>
            <div className="tool-card-wrap">
              <LiveMode onBack={goSelector} />
            </div>
          </motion.section>
        )}

        {page === 'manual' && (
          <motion.section
            className="tool-shell"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="tool-header">
              <button className="back-chip" onClick={goSelector}>← Back to Analysis Hub</button>
              <h2>Manual Crop Recommendation</h2>
              <p>Custom soil and climate input based intelligent crop analysis.</p>
            </div>
            <div className="tool-card-wrap">
              <ManualMode onBack={goSelector} />
            </div>
          </motion.section>
        )}
      </main>

      {/* Footer */}
      <footer className="dashboard-footer">
        <div className="footer-grid">
          <div>
            <h3>Smart Crop System</h3>
            <p>
              A modern agriculture recommendation platform that combines soil analysis,
              live weather insights, and AI-powered crop suggestions.
            </p>
          </div>

          <div>
            <h4>Navigation</h4>
            <button onClick={goHome}>Home</button>
            <button onClick={goSelector}>Analysis Hub</button>
            <button onClick={goLive}>Live Mode</button>
            <button onClick={goManual}>Manual Mode</button>
          </div>

          <div>
            <h4>Project Highlights</h4>
            <span>Machine Learning Recommendation</span>
            <span>Real-Time Weather Integration</span>
            <span>Manual Scenario Testing</span>
            <span>AI Agriculture Chat Support</span>
          </div>
        </div>

        <div className="footer-line">
          © 2026 Smart Crop System • Built for academic project demonstration
        </div>
      </footer>

      {/* Global ChatBot - keep same */}
      <ChatBot />
    </div>
  );
}

export default App;