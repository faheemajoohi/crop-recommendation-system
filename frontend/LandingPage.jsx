import { motion } from 'framer-motion';
import {
  Sprout,
  CloudSun,
  PencilLine,
  MessageCircle,
  ArrowRight,
  MapPinned,
  FlaskConical,
  Bot
} from 'lucide-react';
import './LandingPage.css';

function LandingPage({ onGetStarted, onLiveMode, onManualMode }) {
  return (
    <div className="landing-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero-chip">AI + Agriculture + Smart Decision Support</span>
          <h1>
            Smart Crop Recommendation System for
            <span> Modern Farming</span>
          </h1>
          <p>
            This platform helps farmers and students identify the most suitable crop
            based on soil nutrients, weather conditions, and location-aware live analysis.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn" onClick={onGetStarted}>
              Open Analysis Hub <ArrowRight size={18} />
            </button>

            <button className="hero-secondary-btn" onClick={onLiveMode}>
              Try Live Mode
            </button>
          </div>

          <div className="hero-mini-stats">
            <div className="hero-stat-card">
              <h3>2 Modes</h3>
              <p>Live & Manual analysis support</p>
            </div>
            <div className="hero-stat-card">
              <h3>AI Powered</h3>
              <p>Machine learning crop recommendation</p>
            </div>
            <div className="hero-stat-card">
              <h3>24/7</h3>
              <p>Chatbot assistance for agriculture queries</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-visual-card">
            <div className="hero-visual-top">
              <div className="hero-icon-circle">
                <Sprout size={32} />
              </div>
              <div>
                <h3>Recommendation Workflow</h3>
                <p>Soil + Weather + AI = Crop Suggestion</p>
              </div>
            </div>

            <div className="workflow-list">
              <div className="workflow-item">
                <MapPinned size={20} />
                <span>Location / User Input Collection</span>
              </div>
              <div className="workflow-item">
                <CloudSun size={20} />
                <span>Weather & Environmental Analysis</span>
              </div>
              <div className="workflow-item">
                <FlaskConical size={20} />
                <span>Soil Parameter Evaluation</span>
              </div>
              <div className="workflow-item">
                <Bot size={20} />
                <span>ML-Based Crop Recommendation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="feature-section">
        <div className="feature-heading">
          <span className="section-chip">Core System Modules</span>
          <h2>Everything you need in one smart agriculture platform</h2>
          <p>
            Designed for final-year academic demonstration with practical usability and clean workflow.
          </p>
        </div>

        <div className="feature-grid">
          <motion.div className="feature-card" whileHover={{ y: -5 }}>
            <div className="feature-icon live-bg">
              <CloudSun size={24} />
            </div>
            <h3>Live Mode</h3>
            <p>
              Uses location-aware weather information with soil values for real-time crop recommendation.
            </p>
            <button className="card-link-btn" onClick={onLiveMode}>Open Live Mode</button>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ y: -5 }}>
            <div className="feature-icon manual-bg">
              <PencilLine size={24} />
            </div>
            <h3>Manual Mode</h3>
            <p>
              Enter all parameters manually to test custom farming conditions and compare scenarios.
            </p>
            <button className="card-link-btn" onClick={onManualMode}>Open Manual Mode</button>
          </motion.div>

          <motion.div className="feature-card" whileHover={{ y: -5 }}>
            <div className="feature-icon chat-bg">
              <MessageCircle size={24} />
            </div>
            <h3>AI Chatbot</h3>
            <p>
              Ask crop-related or agriculture support questions through the integrated chatbot assistant.
            </p>
            <button className="card-link-btn" onClick={onGetStarted}>Explore System</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;