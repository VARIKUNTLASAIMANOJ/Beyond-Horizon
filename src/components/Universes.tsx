import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UniverseScene } from './UniverseScene';

const universesData = [
  {
    name: "Observable Universe",
    type: "Known Universe",
    description: "The region of the universe that we can observe from Earth, bounded by the cosmic horizon. Recent observations have provided unprecedented insights into its structure and evolution.",
    facts: [
      "Diameter: 93 billion light-years (Calculated from cosmic expansion)",
      "Age: 13.799 ± 0.021 billion years (Planck satellite measurements)",
      "Total Mass-Energy: 4.9% ordinary matter, 26.8% dark matter, 68.3% dark energy (Planck mission)",
      "Galaxies: >2 trillion (Based on Hubble Deep Field observations)",
      "Large Scale Structure: Cosmic web of filaments (Mapped by galaxy surveys)",
      "Expansion Rate: 67.4 ± 0.5 km/s/Mpc (Planck measurements)",
      "Temperature: 2.725 K cosmic background (COBE satellite measurements)",
      "Flatness: Within 0.4% of critical density (WMAP observations)",
      "Horizon Problem: Regions too distant to have ever communicated show same temperature",
      "Baryon Asymmetry: Slight excess of matter over antimatter",
      "Homogeneity: Uniform on large scales (>100 Mpc)",
      "Isotropy: Same in all directions (CMB observations)"
    ],
    proofs: [
      "Cosmic Microwave Background radiation maps (Planck, WMAP)",
      "Large-scale galaxy surveys (SDSS, 2dF, DES)",
      "Type Ia supernovae observations (distance measurements)",
      "Gravitational wave detections by LIGO/Virgo",
      "Baryon acoustic oscillations in galaxy distribution",
      "Light element abundances matching Big Bang nucleosynthesis predictions",
      "Gravitational lensing observations confirming dark matter"
    ],
    limitations: [
      "Cosmic horizon limits observations to 46.5 billion light-years in any direction",
      "Inflation theory suggests universe extends far beyond observable portion",
      "Dark energy and dark matter remain poorly understood",
      "Initial singularity not directly observable",
      "Quantum gravity effects not yet integrated into cosmological models",
      "Hubble tension: disagreement between different measurements of expansion rate"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-blue-600"
  },
  {
    name: "Quantum Multiverse",
    type: "Theoretical Universe",
    description: "Based on quantum mechanics, this theory suggests that every quantum event creates multiple parallel universes, each representing a different possible outcome. This interpretation resolves quantum paradoxes but implies an infinite branching of reality.",
    facts: [
      "Based on: Many-worlds interpretation of quantum mechanics",
      "Proposed by: Hugh Everett III in 1957",
      "Year Proposed: 1957 (Princeton University thesis)",
      "Number of Universes: Infinite (Continuous branching)",
      "Key Feature: Quantum decoherence separates branches",
      "Observable: Not directly, but supported by quantum experiments",
      "Branch Creation: Every quantum interaction creates new branches",
      "Wavefunction: Never collapses, just branches into different realities",
      "Interaction: No communication between branches possible",
      "Probability: Branch 'weight' corresponds to quantum probability",
      "Schrödinger's Cat: Both alive and dead, in different branches",
      "Scientific Status: Mathematically consistent but controversial"
    ],
    evidence: [
      "Double-slit experiment results consistent with interpretation",
      "Quantum computing research aligns with many-worlds mathematics",
      "Decoherence theory provides mechanism for branch separation",
      "Quantum interference patterns match predictions",
      "No need for 'observer' to collapse wavefunction"
    ],
    key_scientists: [
      "Hugh Everett III (Original proposer)",
      "Bryce DeWitt (Popularized and named the theory)",
      "David Deutsch (Quantum computing pioneer supporting many-worlds)",
      "Max Tegmark (Contemporary proponent)",
      "Sean Carroll (Theoretical physicist advocating many-worlds)"
    ],
    philosophical_implications: [
      "Deterministic universe despite quantum randomness",
      "Every possible quantum outcome actually occurs somewhere",
      "Questions about identity across branches",
      "Challenges to traditional concepts of probability",
      "Implications for free will and decision-making"
    ],
    image: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1024&q=80",
    color: "bg-purple-600"
  },
  {
    name: "Bubble Universe",
    type: "Theoretical Universe",
    description: "Part of the eternal inflation theory, suggesting our universe is one of many bubbles that formed during cosmic inflation, each with potentially different physical laws. These bubble universes continue to form in an eternally inflating background.",
    facts: [
      "Theory Origin: Eternal inflation (extension of cosmic inflation)",
      "Proposed by: Andrei Linde in 1986",
      "Year: 1986 (Stanford University)",
      "Expansion: Eternal in the background space",
      "Physics: Varied between bubbles (different vacuum states)",
      "Interaction: Impossible between bubbles in most versions",
      "Number: Potentially infinite bubble universes",
      "Formation: Quantum fluctuations in inflating space",
      "Size: Each bubble potentially infinite internally",
      "Collision: Possible but extremely rare between bubbles",
      "Evidence: Potential cosmic microwave background signatures",
      "String Theory Connection: Landscape of 10^500 possible vacuum states"
    ],
    theoretical_support: [
      "Solves flatness and horizon problems in cosmology",
      "Compatible with string theory landscape",
      "Explains fine-tuning of physical constants",
      "Consistent with inflationary cosmology mathematics",
      "Provides mechanism for varied physical laws"
    ],
    potential_evidence: [
      "Possible bubble collision signatures in CMB",
      "Cold spots in cosmic microwave background",
      "Anomalous features in large-scale structure",
      "Future gravitational wave signatures",
      "Potential quantum gravity experiments"
    ],
    key_scientists: [
      "Andrei Linde (Original proposer)",
      "Alan Guth (Inflation theory pioneer)",
      "Alexander Vilenkin (Eternal inflation developer)",
      "Leonard Susskind (String theory landscape connection)",
      "Brian Greene (Theoretical physicist and popularizer)"
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1024&q=80",
    color: "bg-green-600"
  },
  {
    name: "Brane Multiverse",
    type: "Theoretical Universe",
    description: "Based on string theory, suggesting our universe exists on a membrane (brane) in higher-dimensional space, with other universes potentially existing on other branes. Gravity can leak between branes, potentially allowing for detection of parallel universes.",
    facts: [
      "Based on: String theory and M-theory",
      "Dimensions: 10 or 11 total dimensions",
      "Interaction: Via gravity across higher dimensions",
      "Distance: Separated in higher dimensions, not regular space",
      "Detection: Potential gravitational effects",
      "Energy Scales: Planck scale phenomena",
      "Branes: 3+1 dimensional 'sheets' in higher dimensions",
      "Gravity: Only force that can travel between branes",
      "Big Bang: Potentially caused by brane collisions",
      "Cyclic Models: Repeated brane collisions possible",
      "Dark Matter: Could be matter on nearby branes",
      "Dark Energy: Might be effect of brane tension"
    ],
    theoretical_framework: [
      "Ekpyrotic universe model (Steinhardt & Turok)",
      "Randall-Sundrum models of warped geometry",
      "Type IIB string theory with D-branes",
      "M-theory with membrane dynamics",
      "AdS/CFT correspondence providing mathematical tools"
    ],
    potential_evidence: [
      "Gravitational wave signatures from brane interactions",
      "Unexpected gravity strength at small scales",
      "Anomalous cosmic ray events",
      "Large-scale gravitational anomalies",
      "Particle accelerator signatures at extreme energies"
    ],
    key_scientists: [
      "Lisa Randall & Raman Sundrum (Key brane world models)",
      "Paul Steinhardt & Neil Turok (Ekpyrotic universe)",
      "Edward Witten (M-theory developer)",
      "Gabriele Veneziano (Pre-big bang scenarios)",
      "Nima Arkani-Hamed (Large extra dimensions)"
    ],
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&w=1024&q=80",
    color: "bg-red-600"
  },
  {
    name: "Holographic Universe",
    type: "Theoretical Universe",
    description: "Proposes that our three-dimensional reality is actually encoded on a two-dimensional boundary, similar to how a hologram contains 3D information on a 2D surface. This theory emerges from black hole thermodynamics and string theory.",
    facts: [
      "Origin: Black hole thermodynamics and string theory",
      "Proposed by: Gerard 't Hooft and Leonard Susskind",
      "Year: 1993-1995",
      "Key Principle: Information equivalence between bulk and boundary",
      "Mathematical Basis: AdS/CFT correspondence",
      "Dimensionality: 3D reality encoded on 2D surface",
      "Information: Preserved on boundary of spacetime",
      "Black Holes: Central to development of theory",
      "Quantum Gravity: Potential resolution of paradoxes",
      "Entropy: Proportional to area, not volume",
      "Experimental Status: Indirect evidence from quantum systems",
      "Cosmological Horizon: Potential location of holographic encoding"
    ],
    theoretical_support: [
      "Resolves black hole information paradox",
      "Consistent with Bekenstein-Hawking entropy formula",
      "Supported by AdS/CFT correspondence in string theory",
      "Explains area-law scaling of entanglement entropy",
      "Provides framework for quantum gravity"
    ],
    potential_evidence: [
      "Quantum critical systems showing holographic behavior",
      "Fermionic condensed matter systems matching predictions",
      "Quantum entanglement patterns consistent with theory",
      "Potential signatures in cosmic microwave background",
      "Quantum computing experiments testing holographic principles"
    ],
    key_scientists: [
      "Gerard 't Hooft (Nobel laureate, original proposer)",
      "Leonard Susskind (Developed holographic principle)",
      "Juan Maldacena (AdS/CFT correspondence)",
      "Edward Witten (Mathematical formulation)",
      "Kip Thorne (Black hole information paradox)"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-indigo-600"
  },
  {
    name: "Cyclic Universe",
    type: "Theoretical Universe",
    description: "Proposes that the universe goes through endless cycles of big bangs and big crunches, with each cycle potentially having different physical laws. This model avoids the need for an initial singularity and provides an alternative to eternal inflation.",
    facts: [
      "Basic Concept: Universe undergoes repeated cycles",
      "Cycle Components: Expansion, contraction, bounce/bang",
      "Proposed by: Various scientists throughout history, modern version by Steinhardt & Turok",
      "Year: Modern version 2001-2002",
      "Duration: Trillions of years per cycle typically",
      "Mechanism: Various (brane collisions, quantum bounce, etc.)",
      "Initial Conditions: No beginning, eternally cycling",
      "Entropy: Must be addressed between cycles",
      "Singularity: Avoided in most modern versions",
      "Compatibility: Consistent with current observations",
      "Alternatives: Provides alternative to inflation",
      "Testability: Potential gravitational wave signatures"
    ],
    theoretical_models: [
      "Ekpyrotic universe (Steinhardt & Turok)",
      "Conformal cyclic cosmology (Roger Penrose)",
      "Loop quantum cosmology bounce (Ashtekar, Bojowald)",
      "Baum-Frampton model (phantom energy driven)",
      "String gas cosmology (Brandenberger)"
    ],
    potential_evidence: [
      "Concentric circles in cosmic microwave background (Penrose)",
      "Gravitational wave background from previous cycles",
      "Black hole distribution patterns",
      "Large-scale structure formation patterns",
      "Potential quantum gravity signatures"
    ],
    key_scientists: [
      "Paul Steinhardt & Neil Turok (Ekpyrotic model)",
      "Roger Penrose (Conformal cyclic cosmology)",
      "Martin Bojowald (Loop quantum cosmology)",
      "Lauris Baum & Paul Frampton (Phantom energy model)",
      "Robert Brandenberger (String gas cosmology)"
    ],
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1024&q=80",
    color: "bg-yellow-600"
  },
  {
    name: "Simulated Universe",
    type: "Philosophical Universe",
    description: "Proposes that our reality is actually a computer simulation created by an advanced civilization. This philosophical hypothesis has gained attention from physicists, computer scientists, and philosophers, with some suggesting ways to test whether we live in a simulation.",
    facts: [
      "Basic Premise: Reality is a sophisticated computer simulation",
      "Popularized by: Nick Bostrom's simulation argument (2003)",
      "Key Paper: 'Are You Living in a Computer Simulation?' (2003)",
      "Probability Claim: If advanced civilizations create simulations, we likely live in one",
      "Computing Requirements: Enormous but not physically impossible",
      "Ancestor Simulations: Created to study evolutionary history",
      "Nested Simulations: Simulations within simulations possible",
      "Physical Laws: Consistent rules necessary for simulation stability",
      "Quantum Mechanics: Potentially optimization technique (compute only when observed)",
      "Glitches: Potential anomalies in physical laws at extreme scales",
      "Scientific Status: Philosophical hypothesis, not scientific theory",
      "Testing: Extremely difficult but not necessarily impossible"
    ],
    arguments_for: [
      "Technological trajectory suggests advanced civilizations could create such simulations",
      "Quantum mechanics resembles optimization techniques in computing",
      "Discreteness at Planck scale consistent with computational limits",
      "Physical constants appear finely tuned for complexity",
      "Consciousness potentially simulatable with sufficient computing power"
    ],
    arguments_against: [
      "No falsifiable tests currently possible",
      "Quantum computing challenges suggest fundamental computational limits",
      "Infinite regress problem (who simulates the simulators?)",
      "No observed 'glitches' in physical laws",
      "Consciousness may not be computable"
    ],
    key_proponents: [
      "Nick Bostrom (Philosopher, original simulation argument)",
      "Elon Musk (Entrepreneur, public advocate)",
      "Neil deGrasse Tyson (Astrophysicist, considers it plausible)",
      "David Chalmers (Philosopher, simulation as reality)",
      "James Gates (Physicist, error-correcting codes in string theory)"
    ],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1024&q=80",
    color: "bg-emerald-600"
  }
];

export function Universes() {
  const [selectedUniverse, setSelectedUniverse] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[80vh]">
        <UniverseScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Explore the Multiverse
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Venture beyond our universe and discover the mind-bending theories of the multiverse and parallel realities that challenge our understanding of existence itself.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universesData.map((universe, index) => (
            <motion.div
              key={universe.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm"
              onClick={() => {
                setSelectedUniverse(universe);
                setShowInfo(true);
              }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={universe.image}
                  alt={universe.name}
                  className="object-cover w-full h-64 rounded-t-2xl transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{universe.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{universe.type}</p>
                <div className={`w-full h-1 ${universe.color} rounded-full opacity-50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Universe Details Modal */}
      {showInfo && selectedUniverse && (
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
                  src={selectedUniverse.image}
                  alt={selectedUniverse.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                
                {selectedUniverse.proofs && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Scientific Evidence</h4>
                    <div className="space-y-2">
                      {selectedUniverse.proofs.map((proof, index) => (
                        <p key={index} className="text-sm text-gray-400">• {proof}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.evidence && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Supporting Evidence</h4>
                    <div className="space-y-2">
                      {selectedUniverse.evidence.map((item, index) => (
                        <p key={index} className="text-sm text-gray-400">• {item}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.potential_evidence && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Potential Evidence</h4>
                    <div className="space-y-2">
                      {selectedUniverse.potential_evidence.map((item, index) => (
                        <p key={index} className="text-sm text-gray-400">• {item}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.key_scientists && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Key Scientists</h4>
                    <div className="space-y-2">
                      {selectedUniverse.key_scientists.map((scientist, index) => (
                        <p key={index} className="text-sm text-gray-400">• {scientist}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.key_proponents && (
                  <div className="mt-6">
                    <h4 className="text-xl font-semibold mb-3">Key Proponents</h4>
                    <div className="space-y-2">
                      {selectedUniverse.key_proponents.map((proponent, index) => (
                        <p key={index} className="text-sm text-gray-400">• {proponent}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedUniverse.name}</h3>
                <p className="text-purple-400 mb-4">{selectedUniverse.type}</p>
                <p className="text-gray-300 mb-6">{selectedUniverse.description}</p>
                
                <h4 className="text-xl font-semibold mb-3">Key Facts</h4>
                <div className="space-y-2 mb-6">
                  {selectedUniverse.facts.map((fact, index) => (
                    <p key={index} className="text-sm text-gray-400">• {fact}</p>
                  ))}
                </div>
                
                {selectedUniverse.limitations && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Limitations</h4>
                    <div className="space-y-2">
                      {selectedUniverse.limitations.map((limitation, index) => (
                        <p key={index} className="text-sm text-gray-400">• {limitation}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.theoretical_support && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Theoretical Support</h4>
                    <div className="space-y-2">
                      {selectedUniverse.theoretical_support.map((support, index) => (
                        <p key={index} className="text-sm text-gray-400">• {support}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.theoretical_framework && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Theoretical Framework</h4>
                    <div className="space-y-2">
                      {selectedUniverse.theoretical_framework.map((framework, index) => (
                        <p key={index} className="text-sm text-gray-400">• {framework}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.theoretical_models && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Theoretical Models</h4>
                    <div className="space-y-2">
                      {selectedUniverse.theoretical_models.map((model, index) => (
                        <p key={index} className="text-sm text-gray-400">• {model}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.philosophical_implications && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Philosophical Implications</h4>
                    <div className="space-y-2">
                      {selectedUniverse.philosophical_implications.map((implication, index) => (
                        <p key={index} className="text-sm text-gray-400">• {implication}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.arguments_for && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Arguments For</h4>
                    <div className="space-y-2">
                      {selectedUniverse.arguments_for.map((argument, index) => (
                        <p key={index} className="text-sm text-gray-400">• {argument}</p>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedUniverse.arguments_against && (
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3">Arguments Against</h4>
                    <div className="space-y-2">
                      {selectedUniverse.arguments_against.map((argument, index) => (
                        <p key={index} className="text-sm text-gray-400">• {argument}</p>
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