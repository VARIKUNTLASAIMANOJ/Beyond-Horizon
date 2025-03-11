import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpaceMysteriesScene } from './SpaceMysteriesScene';

const mysteriesData = [
  {
    name: "Dark Matter",
    type: "Cosmological Mystery",
    description: "Invisible matter that makes up approximately 85% of the universe's mass, detected only through its gravitational effects on visible matter.",
    facts: [
      "Makes up about 85% of matter in universe",
      "Cannot be directly observed with current technology",
      "Crucial for galaxy formation and structure",
      "Does not interact with electromagnetic radiation",
      "First proposed by Fritz Zwicky in 1933",
      "Detected through gravitational lensing",
      "Present in all observed galaxies",
      "Key to understanding cosmic structure"
    ],
    evidence: [
      "Galaxy rotation curves",
      "Gravitational lensing observations",
      "Cosmic microwave background patterns",
      "Galaxy cluster dynamics",
      "Structure formation in early universe"
    ],
    detection_methods: [
      "Underground dark matter detectors",
      "Particle collider experiments",
      "Astronomical observations",
      "Gravitational lensing surveys",
      "Galaxy rotation measurements"
    ],
    leading_theories: [
      "Cold Dark Matter (CDM): Slow-moving, massive particles",
      "Weakly Interacting Massive Particles (WIMPs): Leading candidate",
      "Axions: Light particles from quantum chromodynamics",
      "Sterile neutrinos: Theoretical fourth neutrino type",
      "Modified gravity theories: Alternative to dark matter"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-purple-600"
  },
  {
    name: "Dark Energy",
    type: "Cosmological Mystery",
    description: "A mysterious force causing the universe's expansion to accelerate, counteracting gravity on cosmic scales.",
    facts: [
      "Comprises about 68% of universe's energy",
      "Causes accelerating cosmic expansion",
      "Discovered in 1998 through supernova observations",
      "Constant throughout space and time",
      "Nature completely unknown",
      "Possibly quantum vacuum energy",
      "Could determine universe's fate",
      "Uniform throughout space"
    ],
    evidence: [
      "Type Ia supernova observations",
      "Cosmic microwave background",
      "Large-scale structure surveys",
      "Baryon acoustic oscillations",
      "Integrated Sachs-Wolfe effect"
    ],
    leading_theories: [
      "Cosmological constant (Einstein's lambda)",
      "Quintessence (Dynamic scalar field)",
      "Modified gravity theories",
      "Quantum vacuum energy",
      "Emergent phenomenon theories"
    ],
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1024&q=80",
    color: "bg-blue-600"
  },
  {
    name: "Quantum Entanglement",
    type: "Quantum Mystery",
    description: "A quantum phenomenon where particles become correlated in such a way that the quantum state of each particle cannot be described independently.",
    facts: [
      "Einstein called it 'spooky action at distance'",
      "Instantaneous correlation over any distance",
      "Key to quantum computing",
      "Violates local realism",
      "Experimentally verified repeatedly",
      "Used in quantum cryptography",
      "Fundamental to quantum mechanics",
      "No classical analog exists"
    ],
    experimental_confirmations: [
      "Bell test experiments",
      "Quantum teleportation demonstrations",
      "Satellite-based entanglement distribution",
      "Quantum memory experiments",
      "Multi-particle entanglement tests"
    ],
    applications: [
      "Quantum computing",
      "Quantum cryptography",
      "Quantum sensing",
      "Quantum teleportation",
      "Quantum networks"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1024&q=80",
    color: "bg-green-600"
  }
];

export function SpaceMysteries() {
  const [selectedMystery, setSelectedMystery] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[80vh]">
        <SpaceMysteriesScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Unexplained Mysteries of Space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Explore the most perplexing mysteries and unsolved phenomena that challenge our understanding of the cosmos.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mysteriesData.map((mystery, index) => (
            <motion.div
              key={mystery.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              onClick={() => {
                setSelectedMystery(mystery);
                setShowInfo(true);
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={mystery.image}
                  alt={mystery.name}
                  className="object-cover w-full h-64 rounded-t-2xl transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{mystery.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{mystery.type}</p>
                <div className={`w-full h-1 ${mystery.color} rounded-full opacity-50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mystery Details Modal */}
      {showInfo && selectedMystery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setShowInfo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src={selectedMystery.image}
                  alt={selectedMystery.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                {selectedMystery.evidence && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Evidence</h4>
                    <div className="space-y-2">
                      {selectedMystery.evidence.map((item, index) => (
                        <p key={index} className="text-sm text-gray-400">• {item}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedMystery.detection_methods && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Detection Methods</h4>
                    <div className="space-y-2">
                      {selectedMystery.detection_methods.map((method, index) => (
                        <p key={index} className="text-sm text-gray-400">• {method}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedMystery.experimental_confirmations && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Experimental Confirmations</h4>
                    <div className="space-y-2">
                      {selectedMystery.experimental_confirmations.map((confirmation, index) => (
                        <p key={index} className="text-sm text-gray-400">• {confirmation}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedMystery.name}</h3>
                <p className="text-purple-400 mb-4">{selectedMystery.type}</p>
                <p className="text-gray-300 mb-6">{selectedMystery.description}</p>
                
                <h4 className="text-xl font-semibold mb-3">Key Facts</h4>
                <div className="space-y-2 mb-6">
                  {selectedMystery.facts.map((fact, index) => (
                    <p key={index} className="text-sm text-gray-400">• {fact}</p>
                  ))}
                </div>
                
                {selectedMystery.leading_theories && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Leading Theories</h4>
                    <div className="space-y-2">
                      {selectedMystery.leading_theories.map((theory, index) => (
                        <p key={index} className="text-sm text-gray-400">• {theory}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedMystery.applications && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Applications</h4>
                    <div className="space-y-2">
                      {selectedMystery.applications.map((application, index) => (
                        <p key={index} className="text-sm text-gray-400">• {application}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}