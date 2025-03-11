import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GalaxyScene } from './GalaxyScene';

const galaxiesData = [
  {
    name: "Milky Way",
    type: "Barred Spiral Galaxy",
    description: "Our home galaxy, containing our solar system along with 100-400 billion other stars. The Milky Way is part of the Local Group of galaxies and is currently on a collision course with the Andromeda Galaxy.",
    facts: [
      "Diameter: ~100,000 light-years (Measured by star distribution)",
      "Stars: 100-400 billion (Estimated from mass and luminosity)",
      "Age: 13.6 billion years (Determined from oldest stars)",
      "Mass: ~1.5 trillion solar masses (Calculated from orbital velocities)",
      "Black Hole: Sagittarius A*, 4.3 million solar masses (Measured by stellar orbits)",
      "Structure: Barred spiral with 4 major arms (Observed via radio astronomy)",
      "Location: Orion Arm, between Perseus and Sagittarius Arms",
      "Rotation: 220 km/s at Sun's position (Measured by stellar motions)",
      "Rotation Period: 225-250 million years at Sun's position",
      "Thickness: 1,000 light-years (thin disk), 3,000 light-years (thick disk)",
      "Halo: Extends 100,000+ light-years beyond disk",
      "Satellite Galaxies: 59 known dwarf galaxies in orbit"
    ],
    notable_features: [
      "Galactic Center: Dense star cluster and supermassive black hole",
      "Fermi Bubbles: Giant gamma-ray structures extending above and below the galactic plane",
      "Great Attractor: Mysterious gravitational anomaly pulling the Milky Way",
      "Galactic Habitable Zone: Region with conditions suitable for life",
      "Stellar Bar: 27,000 light-year long bar-shaped structure of stars"
    ],
    recent_discoveries: [
      "2019: Antlia 2, a massive but extremely diffuse dwarf galaxy",
      "2020: Vertical wave patterns in the galactic disk from ancient impact",
      "2021: Evidence of multiple ancient collisions shaping the galaxy",
      "2022: Gaia data revealing the most detailed map of the Milky Way",
      "2023: Discovery of previously unknown structures in the galactic halo"
    ],
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1024&q=80",
    color: "bg-blue-600"
  },
  {
    name: "Andromeda Galaxy (M31)",
    type: "Spiral Galaxy",
    description: "The nearest major galaxy to the Milky Way and the largest member of the Local Group. Andromeda is on a collision course with our galaxy, expected to merge in about 4.5 billion years.",
    facts: [
      "Distance from Earth: 2.537 million light-years (Measured via Cepheid variables)",
      "Diameter: ~220,000 light-years (Larger than the Milky Way)",
      "Stars: ~1 trillion (Estimated from mass and luminosity)",
      "Mass: ~1.5 trillion solar masses (Similar to Milky Way)",
      "Black Hole: 100-140 million solar masses (Much larger than Milky Way's)",
      "Age: 10 billion years (Determined from stellar populations)",
      "Approach Speed: 110 km/s toward Milky Way (Measured via Doppler shift)",
      "Structure: Classical spiral galaxy with two main arms",
      "Satellite Galaxies: 14 known dwarf companions",
      "Collision Timeline: Will begin interacting with Milky Way in ~4 billion years",
      "Merger Result: Will form giant elliptical galaxy ('Milkomeda')",
      "Visibility: Naked-eye visible in dark skies as fuzzy patch"
    ],
    research_value: [
      "Laboratory for studying galaxy similar to Milky Way from outside",
      "Provides insights into our galaxy's future evolution",
      "Contains diverse stellar populations for comparative studies",
      "Hosts numerous star formation regions of different ages",
      "Allows study of supermassive black hole larger than Milky Way's"
    ],
    observation_history: [
      "First recorded by Persian astronomer Al-Sufi in 964 CE",
      "Classified as a 'nebula' until 1920s",
      "Edwin Hubble proved its extragalactic nature in 1925",
      "Extensively studied by Hubble Space Telescope since 1990s",
      "Mapped in unprecedented detail by JWST in 2022-2023"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-purple-600"
  },
  {
    name: "Messier 87 (M87)",
    type: "Elliptical Galaxy",
    description: "A massive elliptical galaxy in the Virgo Cluster, famous for its relativistic jet and the first black hole ever imaged. M87 contains trillions of stars and thousands of globular clusters.",
    facts: [
      "Distance from Earth: 53.5 million light-years (Measured via surface brightness fluctuations)",
      "Diameter: ~240,000 light-years (More than twice Milky Way's size)",
      "Mass: 2.4-3.5 trillion solar masses (Measured via stellar dynamics)",
      "Black Hole: 6.5 billion solar masses (First directly imaged black hole)",
      "Age: 12+ billion years (One of the oldest galaxies observed)",
      "Jet: 5,000+ light-year relativistic jet of plasma (Observed in multiple wavelengths)",
      "Globular Clusters: 12,000+ (Compared to Milky Way's ~150)",
      "Environment: Dominant galaxy in Virgo Cluster center",
      "X-ray Emissions: Powerful from superheated gas around black hole",
      "Stellar Population: Primarily old, red stars with minimal new star formation",
      "Rotation: High rotational velocity of ~1,000 km/s"
    ],
    unusual_properties: [
      "Hybrid nature between spiral and elliptical galaxies",
      "Unusually large number of globular clusters for its size",
      "Evidence of past merger activity in stellar halo",
      "Extremely massive central black hole relative to galaxy size",
      "Minimal star formation despite abundant gas reserves"
    ],
    observation_history: [
      "Discovered by Pierre Méchain in 1781",
      "Added to Messier catalog by Charles Messier in 1781",
      "First photographed in detail by Isaac Roberts in 1893",
      "Extensively studied by Hubble Space Telescope since 1990s",
      "Spitzer Space Telescope revealed extended dust structures in 2005"
    ],
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1024&q=80",
    color: "bg-yellow-500"
  },
  {
    name: "Whirlpool Galaxy (M51)",
    type: "Interacting Spiral Galaxy",
    description: "A grand-design spiral galaxy with a prominent companion galaxy (NGC 5195), showcasing one of the most dramatic examples of galactic interaction in our cosmic neighborhood. Its face-on orientation provides an excellent view of spiral structure.",
    facts: [
      "Diameter: ~60,000 light-years",
      "Distance from Earth: 23 million light-years",
      "Type: Grand-design spiral galaxy",
      "Companion: NGC 5195, interacting dwarf galaxy",
      "Age: ~400 million years since interaction began",
      "Spiral Arms: Two prominent arms with high star formation",
      "Supermassive Black Hole: 1 million solar masses",
      "Star Formation Rate: 4-8 solar masses per year",
      "Interaction Status: Multiple passes of companion galaxy",
      "Visible Features: Detailed dust lanes and star-forming regions",
      "Future: Will eventually merge completely with companion"
    ],
    scientific_importance: [
      "Laboratory for studying galaxy interactions and mergers",
      "Demonstrates how tidal forces enhance spiral structure",
      "Shows triggered star formation from gravitational disturbance",
      "Provides insights into Milky Way's future merger with Andromeda",
      "Used to study supernova formation in disturbed galaxies"
    ],
    observation_history: [
      "Discovered by Charles Messier in 1773",
      "First spiral structure recognized by Lord Rosse in 1845",
      "First galaxy where spiral structure was observed",
      "Extensively imaged by Hubble Space Telescope",
      "Multiple supernovae observed (1994, 2005, 2011)"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-indigo-500"
  },
  {
    name: "Large Magellanic Cloud",
    type: "Satellite Dwarf Galaxy",
    description: "The fourth-largest galaxy in the Local Group and the closest major galaxy to the Milky Way. This irregular dwarf galaxy is visible to the naked eye from the Southern Hemisphere and contains the spectacular Tarantula Nebula.",
    facts: [
      "Diameter: ~14,000 light-years",
      "Distance from Earth: ~160,000 light-years",
      "Type: Disrupted barred spiral/irregular dwarf galaxy",
      "Stars: ~30 billion",
      "Mass: ~10 billion solar masses",
      "Orbit: Bound to Milky Way, completing orbit in ~1.5 billion years",
      "Notable Feature: Tarantula Nebula, most active star-forming region in Local Group",
      "Supernova 1987A: First naked-eye supernova since 1604",
      "Metallicity: Lower than Milky Way (30% of solar)",
      "Age: Younger stellar population than Milky Way",
      "Interaction: Being disrupted by Milky Way's gravitational pull",
      "Companion: Forms a pair with Small Magellanic Cloud"
    ],
    scientific_value: [
      "Closest laboratory for studying different star formation environment",
      "Provides calibration for cosmic distance ladder",
      "Allows detailed study of stellar evolution at different metallicities",
      "Demonstrates galaxy interaction and satellite disruption",
      "Contains 30 Doradus (Tarantula Nebula), largest known star formation region",
      "Site of first extragalactic supernova studied in detail (SN 1987A)"
    ],
    cultural_significance: [
      "Visible to naked eye in Southern Hemisphere",
      "Known to indigenous peoples of Southern Hemisphere for millennia",
      "Used by navigators as celestial reference point",
      "First documented by Persian astronomer Al-Sufi in 964",
      "Named after Ferdinand Magellan following his voyage in 1519"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-blue-600"
  },
  {
    name: "Centaurus A",
    type: "Peculiar Galaxy",
    description: "A peculiar galaxy that appears to be the result of a merger between an elliptical galaxy and a smaller spiral galaxy. It's the fifth brightest galaxy in the sky and one of the closest radio galaxies to Earth, with enormous radio lobes extending far beyond its visible structure.",
    facts: [
      "Distance from Earth: 13 million light-years",
      "Type: Elliptical galaxy with dust lane (peculiar)",
      "Diameter: ~60,000 light-years",
      "Radio Lobes: Extend over 1 million light-years",
      "Active Galactic Nucleus: Powered by supermassive black hole",
      "Black Hole Mass: 55 million solar masses",
      "Age of Merger: ~100 million years ago",
      "Jets: Relativistic jets extending thousands of light-years",
      "X-ray Emissions: Strong from central region and jets",
      "Star Formation: Active in dust lane regions",
      "Globular Clusters: Over 2,000 identified"
    ],
    scientific_importance: [
      "Closest active galactic nucleus to Earth",
      "Laboratory for studying galaxy mergers in progress",
      "Demonstrates black hole jet formation and propagation",
      "Shows interaction between jets and intergalactic medium",
      "Provides insights into elliptical galaxy formation through mergers",
      "Used to study cosmic ray acceleration mechanisms"
    ],
    observation_history: [
      "Discovered by James Dunlop in 1826",
      "Radio emissions first detected in 1949",
      "First galaxy outside Milky Way where individual stars resolved",
      "Extensively studied across electromagnetic spectrum",
      "Detailed observations by Chandra X-ray Observatory revealed jet structure",
      "Hubble Space Telescope revealed young star clusters in dust lane"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-orange-600"
  },
  {
    name: "Cartwheel Galaxy",
    type: "Ring Galaxy",
    description: "A spectacular ring galaxy formed by a high-speed collision with a smaller galaxy that passed through its center. The collision triggered a wave of star formation that spread outward like a ripple in a pond, creating the distinctive ring structure.",
    facts: [
      "Distance from Earth: 500 million light-years",
      "Diameter: ~150,000 light-years",
      "Type: Ring galaxy (collision remnant)",
      "Age of Collision: ~400 million years ago",
      "Structure: Bright outer ring, inner ring, and hub",
      "Star Formation: Concentrated in outer ring",
      "Spokes: Filaments connecting inner and outer structures",
      "Companion Galaxies: Three smaller galaxies nearby, one likely the intruder",
      "Outer Ring Expansion: Moving outward at ~200 km/s",
      "X-ray Sources: Numerous ultraluminous X-ray sources in ring",
      "Future: Will eventually return to normal spiral structure"
    ],
    scientific_value: [
      "Natural laboratory for studying collision-induced star formation",
      "Demonstrates galaxy resilience and reformation after disruption",
      "Shows propagation of density waves through galactic disk",
      "Provides timeline for post-collision galactic evolution",
      "Contains numerous black hole candidates in star-forming regions",
      "Recently imaged in unprecedented detail by James Webb Space Telescope (2022)"
    ],
    observation_history: [
      "Discovered by Fritz Zwicky in 1941",
      "Classified as peculiar galaxy in early catalogs",
      "Ring structure confirmed by detailed observations in 1970s",
      "Hubble Space Telescope provided detailed images in 1990s",
      "Spitzer Space Telescope revealed infrared structure in 2006",
      "James Webb Space Telescope revealed new details in 2022"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-red-600"
  }
];

export function Galaxies() {
  const [selectedGalaxy, setSelectedGalaxy] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[80vh]">
        <GalaxyScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Explore the Galaxies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Journey through the vast cosmic ocean and discover the magnificent galaxies that populate our universe, from spiral masterpieces to colliding giants.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galaxiesData.map((galaxy, index) => (
            <motion.div
              key={galaxy.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm"
              onClick={() => {
                setSelectedGalaxy(galaxy);
                setShowInfo(true);
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={galaxy.image}
                  alt={galaxy.name}
                  className="object-cover w-full h-64 rounded-t-2xl transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{galaxy.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{galaxy.type}</p>
                <div className={`w-full h-1 ${galaxy.color} rounded-full opacity-50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Galaxy Details Modal */}
      {showInfo && selectedGalaxy && (
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
                  src={selectedGalaxy.image}
                  alt={selectedGalaxy.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                {selectedGalaxy.proofs && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Scientific Evidence</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.proofs.map((proof, index) => (
                        <p key={index} className="text-sm text-gray-400">• {proof}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.recent_discoveries && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Recent Discoveries</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.recent_discoveries.map((discovery, index) => (
                        <p key={index} className="text-sm text-gray-400">• {discovery}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.observation_history && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Observation History</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.observation_history.map((observation, index) => (
                        <p key={index} className="text-sm text-gray-400">• {observation}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.cultural_significance && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Cultural Significance</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.cultural_significance.map((item, index) => (
                        <p key={index} className="text-sm text-gray-400">• {item}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedGalaxy.name}</h3>
                <p className="text-purple-400 mb-4">{selectedGalaxy.type}</p>
                <p className="text-gray-300 mb-6">{selectedGalaxy.description}</p>
                
                <h4 className="text-xl font-semibold mb-3">Key Facts</h4>
                <div className="space-y-2 mb-6">
                  {selectedGalaxy.facts.map((fact, index) => (
                    <p key={index} className="text-sm text-gray-400">• {fact}</p>
                  ))}
                </div>
                
                {selectedGalaxy.structure && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Structure</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.structure.map((item, index) => (
                        <p key={index} className="text-sm text-gray-400">• {item}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.unusual_properties && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Unusual Properties</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.unusual_properties.map((property, index) => (
                        <p key={index} className="text-sm text-gray-400">• {property}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.notable_features && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Notable Features</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.notable_features.map((feature, index) => (
                        <p key={index} className="text-sm text-gray-400">• {feature}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.research_value && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Research Value</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.research_value.map((value, index) => (
                        <p key={index} className="text-sm text-gray-400">• {value}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedGalaxy.scientific_importance && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Scientific Importance</h4>
                    <div className="space-y-2">
                      {selectedGalaxy.scientific_importance.map((importance, index) => (
                        <p key={index} className="text-sm text-gray-400">• {importance}</p>
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