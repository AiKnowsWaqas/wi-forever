import React from 'react';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import EventDetails from './components/EventDetails';
import GuestBook from './components/GuestBook';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import AudioPlayer from './components/AudioPlayer';
import { motion } from 'framer-motion';
import './i18n';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pattern-bg overflow-hidden">
      <LanguageSelector />
      <AudioPlayer />
      <FloatingActions />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <main>
          <CountdownTimer />
          <EventDetails />
          <GuestBook />
        </main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;