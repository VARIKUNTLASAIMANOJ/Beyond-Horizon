import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpaceScene } from './components/SpaceScene';
import { Navigation } from './components/Navigation';
import { RocketIcon } from 'lucide-react';
import { Contact } from './components/Contact';
import { Discoveries } from './components/Discoveries';
import { Planets } from './components/Planets';
import { Missions } from './components/Missions';
import { SpaceEquations } from './components/SpaceEquations';
import { CosmicHistory } from './components/CosmicHistory';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showExplorer, setShowExplorer] = useState(false);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    setShowExplorer(false);
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navigation onNavigate={handleNavigation} currentSection={currentSection} />
      
      <AnimatePresence mode="wait">
        {currentSection === 'home' && !showExplorer && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
          >
            <div className="absolute inset-0">
              <SpaceScene />
            </div>
            
            <div className="relative z-10 flex items-center justify-center h-screen">
              <div className="text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    Welcome to Beyond Horizon
                  </h1>
                  <p className="text-xl text-gray-300 mb-8">
                    Journey through the cosmos and uncover the mysteries of our universe
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowExplorer(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center mx-auto"
                  >
                    <RocketIcon className="mr-2 h-5 w-5" />
                    Begin Your Cosmic Journey
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {showExplorer && (
          <motion.div
            key="explorer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-16"
          >
            <CosmicHistory />
            <Planets />
          </motion.div>
        )}

        {currentSection === 'discoveries' && (
          <motion.div
            key="discoveries"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <Discoveries />
          </motion.div>
        )}

        {currentSection === 'missions' && (
          <motion.div
            key="missions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <Missions />
          </motion.div>
        )}

        {currentSection === 'equations' && (
          <motion.div
            key="equations"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <SpaceEquations />
          </motion.div>
        )}

        {currentSection === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;