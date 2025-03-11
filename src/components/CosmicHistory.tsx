import React from 'react';
import { motion } from 'framer-motion';
import { CosmicHistoryScene } from './CosmicHistoryScene';

const historyData = [
  {
    era: "The Big Bang",
    time: "13.8 billion years ago",
    description: "The universe began from an infinitely dense point, expanding rapidly in the first fraction of a second. This expansion, known as cosmic inflation, laid the foundation for all cosmic structure.",
    events: [
      "Planck epoch (10⁻⁴³ seconds) - All four fundamental forces unified",
      "Grand unification epoch (10⁻³⁶ seconds) - Strong force separates",
      "Electroweak epoch (10⁻¹² seconds) - Electromagnetic and weak forces separate",
      "Quark epoch (10⁻⁶ seconds) - Quarks and gluons form a quark-gluon plasma",
      "Hadron epoch (1 second) - Quarks combine to form hadrons",
      "Nucleosynthesis (3 minutes) - Protons and neutrons form light elements",
      "Recombination (380,000 years) - Atoms form, universe becomes transparent"
    ],
    learnMore: "https://www.nasa.gov/universe/beyond/origin-of-the-universe",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80"
  },
  {
    era: "Cosmic Dark Ages",
    time: "380,000 - 150 million years after Big Bang",
    description: "Period before the first stars formed, when the universe was filled with hydrogen and helium. The cosmic microwave background radiation comes from the start of this era.",
    events: [
      "Formation of neutral hydrogen and helium gas clouds",
      "Cosmic microwave background radiation becomes observable",
      "Beginning of large-scale structure formation through gravitational attraction",
      "First gravitational wells forming in regions of slightly higher density",
      "Matter begins to clump along filaments of the cosmic web",
      "Temperature drops to a few thousand Kelvin",
      "Universe becomes completely dark as photons decouple from matter"
    ],
    learnMore: "https://www.jwst.nasa.gov/content/science/firstLight.html",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1024&q=80"
  },
  {
    era: "First Stars and Galaxies",
    time: "150-800 million years after Big Bang",
    description: "The first stars began to form, creating heavier elements through nuclear fusion. These first stars were likely much more massive than today's stars and had very short lifespans.",
    events: [
      "Formation of Population III stars (100-1000 solar masses)",
      "First heavy elements created through stellar nucleosynthesis",
      "Beginning of reionization as starlight ionizes surrounding hydrogen",
      "First galaxies assembling through gravitational attraction",
      "First supernovae explosions seeding space with metals",
      "Formation of the first black holes from massive star collapses",
      "Dwarf galaxies begin to merge into larger structures"
    ],
    learnMore: "https://www.nasa.gov/feature/goddard/2019/nasa-s-webb-telescope-will-provide-census-of-fledgling-stars-in-stellar-nursery",
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=1024&q=80"
  },
  {
    era: "Galaxy Formation",
    time: "1-3 billion years after Big Bang",
    description: "Galaxies began to take shape, merging and forming the large-scale structures we see today. The first supermassive black holes also formed during this period, becoming the engines of quasars.",
    events: [
      "Galaxy mergers and evolution accelerate",
      "Formation of galaxy clusters and superclusters",
      "Development of cosmic web structure becomes pronounced",
      "First supermassive black holes grow at galaxy centers",
      "Quasars and active galactic nuclei become common",
      "Peak of star formation in the universe (Cosmic Noon)",
      "Establishment of galaxy morphological types (spiral, elliptical)",
      "Formation of the Local Group begins"
    ],
    learnMore: "https://hubblesite.org/science/galaxies",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80"
  },
  {
    era: "Solar System Formation",
    time: "4.6 billion years ago",
    description: "Our solar system formed from a giant molecular cloud, with the Sun igniting at its center and planets forming from the surrounding disk of gas and dust through accretion.",
    events: [
      "Solar nebula formation from molecular cloud collapse",
      "Sun's nuclear fusion begins in protostar phase",
      "Planet formation from accretion disk through planetesimal aggregation",
      "Late Heavy Bombardment (4.1-3.8 billion years ago)",
      "Formation of Earth's Moon through giant impact hypothesis",
      "Development of planetary atmospheres through outgassing",
      "Migration of gas giants reshaping the solar system",
      "Kuiper Belt and Oort Cloud formation from scattered material"
    ],
    learnMore: "https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/",
    image: "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?auto=format&fit=crop&w=1024&q=80"
  },
  {
    era: "Life on Earth",
    time: "3.8 billion years ago to present",
    description: "From simple single-celled organisms to complex multicellular life, Earth has experienced an incredible journey of biological evolution, mass extinctions, and adaptations.",
    events: [
      "First evidence of microbial life (3.8 billion years ago)",
      "Great Oxygenation Event (2.4-2.0 billion years ago)",
      "First multicellular organisms (1.5 billion years ago)",
      "Cambrian Explosion of complex life (541 million years ago)",
      "Colonization of land by plants and animals (500-400 million years ago)",
      "Five major mass extinction events reshaping biodiversity",
      "Rise of mammals after dinosaur extinction (66 million years ago)",
      "Evolution of humans and development of civilization"
    ],
    learnMore: "https://astrobiology.nasa.gov/about/",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1024&q=80"
  },
  {
    era: "Future of the Cosmos",
    time: "Present to trillions of years ahead",
    description: "The far future of our universe holds many possibilities, from the death of our Sun to the eventual heat death of the universe itself, based on our current understanding of physics.",
    events: [
      "Andromeda-Milky Way galaxy collision (4.5 billion years)",
      "Sun becomes a red giant (5 billion years)",
      "Sun becomes a white dwarf (7-8 billion years)",
      "Last stars burn out (100 trillion years)",
      "Black hole era (10^40 years)",
      "Black hole evaporation through Hawking radiation (10^100 years)",
      "Possible heat death of the universe or Big Rip scenario",
      "Speculative scenarios: vacuum decay, cyclic universe, or multiverse branching"
    ],
    learnMore: "https://science.nasa.gov/astrophysics/focus-areas/how-do-stars-form-and-evolve",
    image: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&w=1024&q=80"
  }
];

export function CosmicHistory() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[80vh]">
        <CosmicHistoryScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            The Story of Our Cosmos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Journey through time from the Big Bang to the far future, exploring the epic tale of cosmic evolution
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="space-y-32">
          {historyData.map((era, index) => (
            <motion.div
              key={era.era}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="relative">
                    <img
                      src={era.image}
                      alt={era.era}
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl" />
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="space-y-6">
                    <div className="text-purple-400 text-sm">{era.time}</div>
                    <h3 className="text-3xl font-bold">{era.era}</h3>
                    <p className="text-gray-300">{era.description}</p>
                    <div className="space-y-2">
                      {era.events.map((event, i) => (
                        <p key={i} className="text-sm text-gray-400">• {event}</p>
                      ))}
                    </div>
                    <a
                      href={era.learnMore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              </div>
              {index < historyData.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full h-16 w-px bg-gradient-to-b from-purple-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}