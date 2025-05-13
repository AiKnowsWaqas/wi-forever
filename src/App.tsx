import React from 'react';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import CalendarIntegration from './components/CalendarIntegration';
import ShareSection from './components/ShareSection';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import { motion } from 'framer-motion';
import './i18n';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pattern-bg overflow-hidden">
      <LanguageSelector />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <main>
          <CountdownTimer />
          <EventDetails />
          <CalendarIntegration />
          <ShareSection />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;