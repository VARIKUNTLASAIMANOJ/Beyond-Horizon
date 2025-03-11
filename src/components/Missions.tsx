import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MissionsScene } from './MissionsScene';

const missionsData = {
  past: [
    {
      name: "Apollo Program",
      years: "1961-1972",
      description: "NASA's most celebrated human spaceflight program that successfully landed humans on the Moon.",
      achievements: [
        "First humans to leave Earth's orbit (Apollo 8)",
        "First humans on the Moon (Apollo 11)",
        "Collected 382 kg of lunar samples",
        "Deployed multiple scientific experiments on lunar surface",
        "Developed life support systems for space travel",
        "Advanced rocket technology significantly"
      ],
      key_missions: [
        "Apollo 8: First lunar orbit",
        "Apollo 11: First Moon landing",
        "Apollo 13: Successful failure",
        "Apollo 17: Last Moon mission"
      ],
      legacy: [
        "Proved human spaceflight beyond Earth orbit possible",
        "Developed technologies still used today",
        "Inspired generations of scientists and engineers",
        "Provided vast scientific data about the Moon"
      ],
      image: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1024&q=80"
    },
    {
      name: "Space Shuttle Program",
      years: "1981-2011",
      description: "Revolutionary reusable spacecraft system that enabled construction of the ISS and deployment of numerous satellites.",
      achievements: [
        "135 successful missions",
        "Launched Hubble Space Telescope",
        "Built International Space Station",
        "Conducted thousands of scientific experiments",
        "First reusable spacecraft system"
      ],
      key_missions: [
        "STS-1: First orbital flight",
        "STS-31: Hubble deployment",
        "STS-71: First ISS docking",
        "STS-135: Final mission"
      ],
      legacy: [
        "Proved reusable spacecraft viable",
        "Enabled space station construction",
        "Advanced satellite servicing capabilities",
        "Developed in-orbit construction techniques"
      ],
      image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1024&q=80"
    }
  ],
  present: [
    {
      name: "James Webb Space Telescope",
      years: "2021-Present",
      description: "The most powerful space telescope ever built, observing the universe in infrared.",
      achievements: [
        "Deepest infrared image of universe ever taken",
        "First direct image of an exoplanet",
        "Detection of water vapor in exoplanet atmospheres",
        "Unprecedented views of galaxy formation"
      ],
      ongoing_research: [
        "Early universe observations",
        "Exoplanet atmospheric analysis",
        "Galaxy formation studies",
        "Dark matter research"
      ],
      impact: [
        "Revolutionary understanding of early universe",
        "New insights into planetary formation",
        "Discovery of previously unknown galaxies",
        "Advanced our understanding of cosmic evolution"
      ],
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1024&q=80"
    },
    {
      name: "Mars Perseverance Mission",
      years: "2020-Present",
      description: "Advanced rover exploring Mars for signs of ancient microbial life.",
      achievements: [
        "First powered flight on another planet (Ingenuity)",
        "Collection of rock samples for future return",
        "Detection of organic molecules",
        "Production of oxygen from Mars atmosphere"
      ],
      ongoing_research: [
        "Ancient microbial life search",
        "Geological history study",
        "Atmospheric composition analysis",
        "Future human mission preparation"
      ],
      impact: [
        "Demonstrated Mars helicopter flight possible",
        "Advanced Mars sample collection techniques",
        "Improved understanding of Mars geology",
        "Tested critical future mission technologies"
      ],
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1024&q=80"
    }
  ],
  future: [
    {
      name: "Artemis Program",
      years: "2024-2030",
      description: "NASA's ambitious plan to return humans to the Moon and establish permanent presence.",
      objectives: [
        "Land first woman and person of color on Moon",
        "Establish sustainable lunar presence",
        "Test technologies for Mars missions",
        "Create lunar economy"
      ],
      planned_missions: [
        "Artemis III: First lunar landing (2025)",
        "Artemis IV: First Gateway station mission",
        "Artemis V: Extended surface operations",
        "Lunar Base Alpha establishment"
      ],
      technologies: [
        "Space Launch System (SLS)",
        "Orion spacecraft",
        "Lunar Gateway station",
        "Advanced spacesuits"
      ],
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1024&q=80"
    },
    {
      name: "Mars Sample Return",
      years: "2028-2033",
      description: "Joint NASA-ESA mission to return Mars samples to Earth for detailed analysis.",
      objectives: [
        "Retrieve Perseverance samples",
        "Launch samples from Mars surface",
        "Return samples safely to Earth",
        "Maintain sample integrity"
      ],
      planned_phases: [
        "Sample Retrieval Lander launch",
        "Mars Ascent Vehicle operation",
        "Earth Return Orbiter capture",
        "Sample containment and analysis"
      ],
      significance: [
        "First Mars sample return",
        "Potential biosignature analysis",
        "Detailed geological study",
        "Technology demonstration"
      ],
      image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1024&q=80"
    }
  ]
};

export function Missions() {
  const [selectedEra, setSelectedEra] = useState('present');
  const [selectedMission, setSelectedMission] = useState(null);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[60vh]">
        <MissionsScene era={selectedEra} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Space Exploration Timeline
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Journey through humanity's greatest space exploration achievements
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-center space-x-4 mb-16">
          {['past', 'present', 'future'].map((era) => (
            <button
              key={era}
              onClick={() => setSelectedEra(era)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedEra === era
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {era.charAt(0).toUpperCase() + era.slice(1)} Missions
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-16">
          {missionsData[selectedEra].map((mission, index) => (
            <motion.div
              key={mission.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              onClick={() => setSelectedMission(mission)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={mission.image}
                    alt={mission.name}
                    className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                  />
                </div>
                <div className="p-8">
                  <div className="text-purple-400 text-sm mb-2">{mission.years}</div>
                  <h3 className="text-2xl font-bold mb-4">{mission.name}</h3>
                  <p className="text-gray-300 mb-6">{mission.description}</p>
                  
                  {selectedEra === 'past' && (
                    <div className="space-y-2">
                      {mission.achievements.slice(0, 3).map((achievement, i) => (
                        <p key={i} className="text-sm text-gray-400">• {achievement}</p>
                      ))}
                    </div>
                  )}
                  
                  {selectedEra === 'present' && (
                    <div className="space-y-2">
                      {mission.ongoing_research.slice(0, 3).map((research, i) => (
                        <p key={i} className="text-sm text-gray-400">• {research}</p>
                      ))}
                    </div>
                  )}
                  
                  {selectedEra === 'future' && (
                    <div className="space-y-2">
                      {mission.objectives.slice(0, 3).map((objective, i) => (
                        <p key={i} className="text-sm text-gray-400">• {objective}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission Details Modal */}
      <AnimatePresence>
        {selectedMission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedMission(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{selectedMission.name}</h3>
                <div className="text-purple-400">{selectedMission.years}</div>
                <img
                  src={selectedMission.image}
                  alt={selectedMission.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="text-gray-300">{selectedMission.description}</p>

                {selectedEra === 'past' && (
                  <>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Key Achievements</h4>
                      <div className="space-y-2">
                        {selectedMission.achievements.map((achievement, i) => (
                          <p key={i} className="text-sm text-gray-400">• {achievement}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Notable Missions</h4>
                      <div className="space-y-2">
                        {selectedMission.key_missions.map((mission, i) => (
                          <p key={i} className="text-sm text-gray-400">• {mission}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Legacy</h4>
                      <div className="space-y-2">
                        {selectedMission.legacy.map((item, i) => (
                          <p key={i} className="text-sm text-gray-400">• {item}</p>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {selectedEra === 'present' && (
                  <>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Current Achievements</h4>
                      <div className="space-y-2">
                        {selectedMission.achievements.map((achievement, i) => (
                          <p key={i} className="text-sm text-gray-400">• {achievement}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Ongoing Research</h4>
                      <div className="space-y-2">
                        {selectedMission.ongoing_research.map((research, i) => (
                          <p key={i} className="text-sm text-gray-400">• {research}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Scientific Impact</h4>
                      <div className="space-y-2">
                        {selectedMission.impact.map((item, i) => (
                          <p key={i} className="text-sm text-gray-400">• {item}</p>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {selectedEra === 'future' && (
                  <>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Mission Objectives</h4>
                      <div className="space-y-2">
                        {selectedMission.objectives.map((objective, i) => (
                          <p key={i} className="text-sm text-gray-400">• {objective}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Planned Missions</h4>
                      <div className="space-y-2">
                        {selectedMission.planned_missions?.map((mission, i) => (
                          <p key={i} className="text-sm text-gray-400">• {mission}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Key Technologies</h4>
                      <div className="space-y-2">
                        {selectedMission.technologies?.map((tech, i) => (
                          <p key={i} className="text-sm text-gray-400">• {tech}</p>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}