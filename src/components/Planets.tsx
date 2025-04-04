import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SpaceScene } from './SpaceScene';
import { Galaxies } from './Galaxies';
import { Universes } from './Universes';
import { SpaceMysteries } from './SpaceMysteries';

const planetsData = [
  {
    name: "Mercury",
    type: "Terrestrial planet",
    description: "The smallest and innermost planet in the Solar System, Mercury experiences extreme temperature variations and holds evidence of past volcanic activity and a magnetic field that defies initial theories.",
    facts: [
      "Surface Temperature: -180°C to 430°C (Confirmed by MESSENGER mission)",
      "Distance from Sun: 57.9 million km (Measured by radar astronomy)",
      "Orbital Period: 88 Earth days (Verified by astronomical observations)",
      "Diameter: 4,879 km (Confirmed by multiple space missions)",
      "Magnetic Field: 1% of Earth's strength (Measured by MESSENGER)",
      "Surface Composition: Rich in volatile elements (Proven by spectroscopic analysis)",
      "Evidence of Water Ice: Confirmed in permanently shadowed polar craters (Proven by radar observations)",
      "Tectonic Activity: Presence of scarps indicating planetary contraction (Observed by MESSENGER)",
      "Core Size: Liquid core 85% of radius (Determined by gravitational studies)",
      "Atmosphere: Extremely thin exosphere of oxygen, sodium, hydrogen, helium and potassium",
      "Surface Gravity: 38% of Earth's gravity",
      "No Natural Satellites: Only planet besides Venus without moons"
    ],
    proofs: [
      "NASA's MESSENGER mission (2011-2015) provided detailed surface mapping",
      "Radar observations from Earth confirmed polar ice deposits",
      "Spectroscopic analysis revealed surface composition",
      "BepiColombo mission (ongoing) providing new data"
    ],
    discoveries: [
      "2011: MESSENGER discovers hollow features suggesting volatile outgassing",
      "2012: Confirmation of water ice at Mercury's poles",
      "2015: Discovery of Mercury's ancient magnetic field",
      "2019: BepiColombo flyby provides new magnetic field data"
    ],
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1024&q=80",
    color: "bg-gray-400"
  },
  {
    name: "Venus",
    type: "Terrestrial planet",
    description: "Often called Earth's sister planet due to their similar size, Venus has a toxic atmosphere and extreme surface temperatures due to a runaway greenhouse effect. Its retrograde rotation and lack of magnetic field make it unique in our solar system.",
    facts: [
      "Diameter: 12,104 km (95% of Earth's diameter)",
      "Mass: 4.8675 × 10^24 kg (81.5% of Earth's mass)",
      "Surface Temperature: 462°C (hot enough to melt lead)",
      "Distance from Sun: 108.2 million km",
      "Day Length: 243 Earth days (longer than its year)",
      "Year Length: 225 Earth days",
      "Rotation: Retrograde (opposite direction to most planets)",
      "Atmospheric Pressure: 92 times Earth's pressure",
      "Atmosphere: 96.5% carbon dioxide, 3.5% nitrogen",
      "Surface Features: 80% volcanic plains, two highland continents",
      "Magnetic Field: Extremely weak, no intrinsic field",
      "Greenhouse Effect: Most extreme in the solar system"
    ],
    discoveries: [
      "1962: Mariner 2 first successful planetary flyby",
      "1975: Venera 9 captures first surface images",
      "1990-1994: Magellan mission maps 98% of surface with radar",
      "2020: Possible phosphine detection suggesting potential microbial life",
      "2021: DAVINCI+ and VERITAS missions announced to study atmosphere and geology"
    ],
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1024&q=80",
    color: "bg-yellow-600"
  },
  {
    name: "Earth",
    type: "Terrestrial planet",
    description: "Our home planet is the only known world to support life. It's the third planet from the Sun and the only planet known to have liquid water on its surface, with a perfect combination of atmosphere, temperature, and magnetic field to sustain life.",
    facts: [
      "Diameter: 12,742 km (Measured by geodetic surveys)",
      "Mass: 5.97237 × 10^24 kg (Determined by gravitational measurements)",
      "Surface Temperature: -88°C to 58°C (Recorded extremes)",
      "Distance from Sun: 149.6 million km (1 Astronomical Unit)",
      "Day Length: 23 hours, 56 minutes, 4 seconds (sidereal day)",
      "Year Length: 365.256 days (sidereal year)",
      "Atmosphere: 78% nitrogen, 21% oxygen, 1% other gases",
      "Water Coverage: 71% of surface",
      "Magnetic Field: Generated by liquid outer core dynamo",
      "Natural Satellite: The Moon, 3,474 km diameter",
      "Axial Tilt: 23.5 degrees (causes seasons)",
      "Age: 4.54 billion years (Radiometric dating of meteorites)"
    ],
    unique_features: [
      "Only known planet with active plate tectonics",
      "Only confirmed planet with current life",
      "Oxygen-rich atmosphere created by biological activity",
      "Hydrologic cycle with liquid, solid, and gaseous water",
      "Protective ozone layer filtering harmful UV radiation",
      "Relatively large moon stabilizing axial tilt"
    ],
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1024&q=80",
    color: "bg-blue-500"
  },
  {
    name: "Mars",
    type: "Terrestrial planet",
    description: "The Red Planet has captured human imagination for centuries. It's the focus of many exploration missions and potential future human colonization, with evidence of ancient rivers, lakes, and possibly oceans suggesting it once had conditions suitable for life.",
    facts: [
      "Diameter: 6,779 km (53% of Earth's diameter)",
      "Mass: 6.4171 × 10^23 kg (10.7% of Earth's mass)",
      "Surface Temperature: -140°C to 20°C (Measured by rovers)",
      "Distance from Sun: 227.9 million km (1.52 AU)",
      "Day Length: 24 hours 37 minutes (Similar to Earth)",
      "Year Length: 687 Earth days",
      "Atmosphere: 95% carbon dioxide, extremely thin (1% of Earth's pressure)",
      "Surface Gravity: 38% of Earth's gravity",
      "Polar Ice Caps: Water ice and carbon dioxide ice",
      "Largest Volcano: Olympus Mons (largest in solar system)",
      "Largest Canyon: Valles Marineris (4,000 km long)",
      "Moons: Phobos and Deimos (likely captured asteroids)"
    ],
    evidence_of_water: [
      "Dried river channels and lake beds (Observed by orbiters)",
      "Mineral deposits requiring water formation (Analyzed by rovers)",
      "Subsurface water ice (Detected by radar)",
      "Recurring slope lineae suggesting seasonal liquid water flows",
      "Ancient shorelines suggesting a northern ocean"
    ],
    missions: [
      "Perseverance (2021-present): Collecting samples for return to Earth",
      "Ingenuity (2021-present): First powered flight on another planet",
      "Curiosity (2012-present): Analyzing habitability and geology",
      "InSight (2018-2022): Studied internal structure and seismic activity",
      "Zhurong (2021-2022): China's first Mars rover"
    ],
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1024&q=80",
    color: "bg-red-500"
  },
  {
    name: "Jupiter",
    type: "Gas giant",
    description: "The largest planet in our solar system, Jupiter is a gas giant with a Great Red Spot that's actually a giant storm that's been raging for hundreds of years. Its powerful magnetic field and numerous moons make it a mini solar system of its own.",
    facts: [
      "Diameter: 139,820 km (11 times Earth's diameter)",
      "Mass: 1.8982 × 10^27 kg (318 times Earth's mass)",
      "Surface Temperature: -110°C (at cloud tops)",
      "Distance from Sun: 778.5 million km (5.2 AU)",
      "Day Length: 10 hours (fastest rotating planet)",
      "Year Length: 12 Earth years",
      "Composition: Primarily hydrogen and helium",
      "Great Red Spot: Storm system larger than Earth, active for 400+ years",
      "Magnetic Field: 14 times stronger than Earth's",
      "Moons: 79 confirmed moons, including the Galilean moons",
      "Rings: Faint ring system discovered by Voyager 1",
      "Internal Heat: Radiates more energy than it receives from the Sun"
    ],
    galilean_moons: [
      "Io: Most volcanically active body in the solar system",
      "Europa: Smooth ice surface with subsurface ocean",
      "Ganymede: Largest moon in the solar system, has magnetic field",
      "Callisto: Heavily cratered surface, possibly has subsurface ocean"
    ],
    missions: [
      "Juno (2016-present): Studying Jupiter's composition and magnetic field",
      "Galileo (1995-2003): First spacecraft to orbit Jupiter",
      "Europa Clipper (planned 2024): Will study Europa's habitability"
    ],
    image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?auto=format&fit=crop&w=1024&q=80",
    color: "bg-orange-300"
  },
  {
    name: "Saturn",
    type: "Gas giant",
    description: "Known for its spectacular ring system, Saturn is a gas giant and the second-largest planet in our solar system. Its low density means it would float in water if there were an ocean large enough to hold it.",
    facts: [
      "Diameter: 116,460 km (9.5 times Earth's diameter)",
      "Mass: 5.6834 × 10^26 kg (95 times Earth's mass)",
      "Surface Temperature: -140°C (at cloud tops)",
      "Distance from Sun: 1.4 billion km (9.5 AU)",
      "Day Length: 10.7 hours",
      "Year Length: 29.5 Earth years",
      "Density: 0.687 g/cm³ (less than water)",
      "Rings: Most extensive and visible ring system, spanning 282,000 km",
      "Ring Composition: Ice particles, rock, and dust",
      "Moons: 82 confirmed moons, including Titan and Enceladus",
      "Hexagonal Storm: Unique hexagonal cloud pattern at north pole",
      "Seasons: Last about 7.5 Earth years each due to axial tilt"
    ],
    notable_moons: [
      "Titan: Only moon with thick atmosphere, has liquid methane lakes",
      "Enceladus: Ice geysers suggest subsurface ocean",
      "Mimas: Large impact crater gives it 'Death Star' appearance",
      "Iapetus: Two-toned coloration with bright and dark hemispheres"
    ],
    missions: [
      "Cassini-Huygens (1997-2017): Extensive study of Saturn system",
      "Voyager 1 & 2 (1980-1981): First detailed images of rings",
      "Dragonfly (planned 2027): Will study Titan's chemistry and habitability"
    ],
    image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&w=1024&q=80",
    color: "bg-yellow-300"
  },
  {
    name: "Uranus",
    type: "Ice giant",
    description: "The seventh planet from the Sun, Uranus is an ice giant with a unique sideways rotation. Its atmosphere appears bland in visible light but infrared and ultraviolet observations reveal complex cloud structures and seasonal changes.",
    facts: [
      "Diameter: 50,724 km (4 times Earth's diameter)",
      "Mass: 8.6810 × 10^25 kg (14.5 times Earth's mass)",
      "Surface Temperature: -195°C (coldest planetary atmosphere)",
      "Distance from Sun: 2.9 billion km (19.8 AU)",
      "Day Length: 17 hours",
      "Year Length: 84 Earth years",
      "Axial Tilt: 98 degrees (rotates on its side)",
      "Composition: Hydrogen, helium, methane (gives blue color)",
      "Interior: Mantle of water, ammonia, and methane ices",
      "Rings: 13 faint rings discovered in 1977",
      "Moons: 27 known moons, all named after literary characters",
      "Magnetic Field: Tilted 59° from rotation axis, offset from center"
    ],
    major_moons: [
      "Titania: Largest moon of Uranus, heavily cratered with canyons",
      "Oberon: Second-largest, heavily cratered with dark material",
      "Umbriel: Darkest major moon with mysterious bright ring",
      "Ariel: Youngest surface with few craters and many valleys",
      "Miranda: Smallest major moon with extremely varied terrain"
    ],
    missions: [
      "Voyager 2 (1986): Only spacecraft to visit Uranus",
      "No dedicated missions yet, though several proposed"
    ],
    image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&w=1024&q=80",
    color: "bg-cyan-500"
  },
  {
    name: "Neptune",
    type: "Ice giant",
    description: "The eighth and most distant planet, Neptune is an ice giant known for its intense blue color and extreme weather. It has the strongest winds in the solar system and was discovered through mathematical predictions rather than observation.",
    facts: [
      "Diameter: 49,244 km (3.9 times Earth's diameter)",
      "Mass: 1.02413 × 10^26 kg (17 times Earth's mass)",
      "Surface Temperature: -214°C",
      "Distance from Sun: 4.5 billion km (30.1 AU)",
      "Day Length: 16 hours",
      "Year Length: 165 Earth years",
      "Wind Speeds: Up to 2,100 km/h (fastest in solar system)",
      "Composition: Hydrogen, helium, methane (gives blue color)",
      "Great Dark Spot: Storm system similar to Jupiter's Great Red Spot",
      "Rings: 5 main rings, faint and composed of dust particles",
      "Moons: 14 known moons, Triton being the largest",
      "Discovery: Mathematically predicted before observation (1846)"
    ],
    notable_features: [
      "Triton: Largest moon, orbits backward, active nitrogen geysers",
      "Scooter: Fast-moving white cloud in atmosphere",
      "Internal Heat: Radiates 2.6 times more energy than received from Sun",
      "Magnetic Field: Tilted 47° from rotation axis, offset from center"
    ],
    missions: [
      "Voyager 2 (1989): Only spacecraft to visit Neptune",
      "No dedicated missions yet, though several proposed"
    ],
    image: "https://images.unsplash.com/photo-1614314107768-6018061b5b72?auto=format&fit=crop&w=1024&q=80",
    color: "bg-blue-700"
  },
  {
    name: "Dwarf Planets",
    type: "Minor planets",
    description: "Beyond Neptune lie the dwarf planets - worlds massive enough to be rounded by their own gravity but that haven't cleared their orbital neighborhood. These include Pluto, Eris, Haumea, Makemake, and Ceres.",
    facts: [
      "Pluto: Diameter 2,377 km, discovered 1930, has 5 moons",
      "Eris: Slightly smaller than Pluto, discovery led to Pluto's reclassification",
      "Ceres: Largest object in asteroid belt, contains 25% of belt's mass",
      "Haumea: Elongated shape due to rapid rotation, has rings",
      "Makemake: Third-largest known dwarf planet, very little known",
      "Composition: Primarily rock and various ices",
      "Locations: Mostly in Kuiper Belt beyond Neptune",
      "Ceres Exception: Located in asteroid belt between Mars and Jupiter",
      "Potential Others: Dozens more candidates await confirmation"
    ],
    pluto_facts: [
      "Surface: Nitrogen, methane and carbon monoxide ices",
      "Heart Feature: Tombaugh Regio, a bright heart-shaped region",
      "Atmosphere: Thin, expands and contracts with orbit",
      "Largest Moon: Charon, nearly half Pluto's size",
      "New Horizons: First spacecraft to visit (2015)"
    ],
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1024&q=80",
    color: "bg-gray-500"
  }
];

export function Planets() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black">
        <div className="relative h-[80vh]">
          <SpaceScene />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
          <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              Explore Our Solar System
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto px-4"
            >
              Interact with our 3D solar system model above. Drag to rotate, scroll to zoom, and discover the wonders of our cosmic neighborhood.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planetsData.map((planet, index) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm"
                onClick={() => {
                  setSelectedPlanet(planet);
                  setShowInfo(true);
                }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={planet.image}
                    alt={planet.name}
                    className="object-cover w-full h-64 rounded-t-2xl transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{planet.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{planet.type}</p>
                  <div className={`w-full h-1 ${planet.color} rounded-full opacity-50`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Planet Details Modal */}
        {showInfo && selectedPlanet && (
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
                    src={selectedPlanet.image}
                    alt={selectedPlanet.name}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  
                  {selectedPlanet.missions && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-3">Key Missions</h4>
                      <div className="space-y-2">
                        {selectedPlanet.missions.map((mission, index) => (
                          <p key={index} className="text-sm text-gray-400">• {mission}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.discoveries && (
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold mb-3">Recent Discoveries</h4>
                      <div className="space-y-2">
                        {selectedPlanet.discoveries.map((discovery, index) => (
                          <p key={index} className="text-sm text-gray-400">• {discovery}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-2">{selectedPlanet.name}</h3>
                  <p className="text-purple-400 mb-4">{selectedPlanet.type}</p>
                  <p className="text-gray-300 mb-6">{selectedPlanet.description}</p>
                  
                  <h4 className="text-xl font-semibold mb-3">Key Facts</h4>
                  <div className="space-y-2 mb-6">
                    {selectedPlanet.facts.map((fact, index) => (
                      <p key={index} className="text-sm text-gray-400">• {fact}</p>
                    ))}
                  </div>
                  
                  {selectedPlanet.galilean_moons && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Galilean Moons</h4>
                      <div className="space-y-2">
                        {selectedPlanet.galilean_moons.map((moon, index) => (
                          <p key={index} className="text-sm text-gray-400">• {moon}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.notable_moons && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Notable Moons</h4>
                      <div className="space-y-2">
                        {selectedPlanet.notable_moons.map((moon, index) => (
                          <p key={index} className="text-sm text-gray-400">• {moon}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.major_moons && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Major Moons</h4>
                      <div className="space-y-2">
                        {selectedPlanet.major_moons.map((moon, index) => (
                          <p key={index} className="text-sm text-gray-400">• {moon}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.evidence_of_water && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Evidence of Water</h4>
                      <div className="space-y-2">
                        {selectedPlanet.evidence_of_water.map((evidence, index) => (
                          <p key={index} className="text-sm text-gray-400">• {evidence}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.unique_features && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Unique Features</h4>
                      <div className="space-y-2">
                        {selectedPlanet.unique_features.map((feature, index) => (
                          <p key={index} className="text-sm text-gray-400">• {feature}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.pluto_facts && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Pluto Highlights</h4>
                      <div className="space-y-2">
                        {selectedPlanet.pluto_facts.map((fact, index) => (
                          <p key={index} className="text-sm text-gray-400">• {fact}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedPlanet.notable_features && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-3">Notable Features</h4>
                      <div className="space-y-2">
                        {selectedPlanet.notable_features.map((feature, index) => (
                          <p key={index} className="text-sm text-gray-400">• {feature}</p>
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
      <Galaxies />
      <Universes />
      <SpaceMysteries />
    </>
  );
}