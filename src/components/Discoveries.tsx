import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiscoveriesScene } from './DiscoveriesScene';

interface Discovery {
  title: string;
  date: string;
  description: string;
  image: string;
  source: string;
  details: string[];
  implications: string[];
  animation?: string;
}

const discoveries: Discovery[] = [
  {
    title: "Water Vapor on Europa",
    date: "2023",
    description: "NASA's James Webb Space Telescope has made a groundbreaking discovery of water vapor above the southern hemisphere of Jupiter's moon Europa.",
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1024&q=80",
    source: "NASA/ESA/CSA",
    details: [
      "Plumes extend several kilometers above surface",
      "Detected using NIRSpec instrument",
      "Confirms previous Hubble observations",
      "Suggests active geological processes",
      "Potential for subsurface ocean exploration"
    ],
    implications: [
      "Increases likelihood of habitable conditions",
      "May influence future mission planning",
      "Suggests easier access to subsurface material",
      "Could indicate hydrothermal activity"
    ]
  },
  {
    title: "Binary Black Hole Merger GW230529",
    date: "2023",
    description: "LIGO-Virgo-KAGRA collaboration detected gravitational waves from the most massive black hole merger observed to date.",
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1024&q=80",
    source: "LIGO/Virgo/KAGRA Collaboration",
    details: [
      "Combined mass: 180 solar masses",
      "Released energy: 8 solar masses",
      "Distance: 6 billion light-years",
      "Spin alignment observed",
      "Multiple detector confirmation"
    ],
    implications: [
      "Challenges black hole formation theories",
      "New insights into stellar evolution",
      "Tests general relativity in strong field regime",
      "Improves gravitational wave detection methods"
    ]
  },
  {
    title: "Exoplanet K2-18b Atmosphere",
    date: "2023",
    description: "James Webb Space Telescope detected potential signs of life in the atmosphere of super-Earth exoplanet K2-18b.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1024&q=80",
    source: "NASA/ESA/CSA",
    details: [
      "Distance: 120 light-years",
      "Size: 8.6 times Earth's mass",
      "Temperature: -20°C to 20°C",
      "Methane and carbon dioxide detected",
      "Potential ocean world"
    ],
    implications: [
      "First potential hycean world discovered",
      "Expands habitable zone concept",
      "New category of potentially habitable worlds",
      "Guides future exoplanet observations"
    ]
  },
  {
    title: "Milky Way's Ancient Collision",
    date: "2023",
    description: "Gaia space observatory revealed evidence of an ancient collision between the Milky Way and a previously unknown galaxy.",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1024&q=80",
    source: "ESA/Gaia",
    details: [
      "Collision occurred 7-8 billion years ago",
      "Affected 30% of stars in galactic disk",
      "Created unique stellar stream",
      "Modified galaxy's rotation pattern",
      "Left chemical signatures in stars"
    ],
    implications: [
      "Rewrites Milky Way formation history",
      "Explains observed stellar populations",
      "Impacts galaxy evolution models",
      "Provides timeline for stellar archaeology"
    ]
  }
];

export function Discoveries(): JSX.Element {
  const [selectedDiscovery, setSelectedDiscovery] = useState<Discovery | null>(null);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[60vh]">
        <DiscoveriesScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Recent Space Discoveries
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Explore the latest breakthroughs in our understanding of the cosmos
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {discoveries.map((discovery, index) => (
            <motion.div
              key={discovery.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              onClick={() => setSelectedDiscovery(discovery)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={discovery.image}
                    alt={discovery.title}
                    className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                  />
                </div>
                <div className="p-8">
                  <div className="text-purple-400 text-sm mb-2">{discovery.date}</div>
                  <h3 className="text-2xl font-bold mb-4">{discovery.title}</h3>
                  <p className="text-gray-300 mb-6">{discovery.description}</p>
                  <div className="space-y-2">
                    {discovery.details.slice(0, 3).map((detail, i) => (
                      <p key={i} className="text-sm text-gray-400">• {detail}</p>
                    ))}
                  </div>
                  <div className="mt-6 text-sm text-gray-500">Source: {discovery.source}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDiscovery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedDiscovery(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{selectedDiscovery.title}</h3>
                <img
                  src={selectedDiscovery.image}
                  alt={selectedDiscovery.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <p className="text-gray-300">{selectedDiscovery.description}</p>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Key Findings</h4>
                  <div className="space-y-2">
                    {selectedDiscovery.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-400">• {detail}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Scientific Implications</h4>
                  <div className="space-y-2">
                    {selectedDiscovery.implications.map((implication, i) => (
                      <p key={i} className="text-sm text-gray-400">• {implication}</p>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-500">
                  Source: {selectedDiscovery.source}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}