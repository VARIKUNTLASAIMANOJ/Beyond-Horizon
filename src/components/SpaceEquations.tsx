import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpaceEquationsScene } from './SpaceEquationsScene';
import { Code } from 'lucide-react';

const equationsData = [
  {
    name: "Newton's Law of Universal Gravitation",
    equation: "F = G(m₁m₂)/r²",
    description: "The gravitational force between two objects is proportional to their masses and inversely proportional to the square of the distance between them.",
    derivation: "Newton derived this law by combining Kepler's laws of planetary motion with his own laws of motion. He realized that the same force causing objects to fall on Earth also keeps planets in orbit around the Sun. The inverse square relationship was determined by analyzing planetary orbital data.",
    variables: [
      "F = Gravitational force",
      "G = Gravitational constant (6.674 × 10⁻¹¹ N⋅m²/kg²)",
      "m₁, m₂ = Masses of the objects",
      "r = Distance between the centers of the masses"
    ],
    applications: [
      "Planetary orbits",
      "Satellite motion",
      "Tidal forces",
      "Galaxy formation"
    ],
    color: "bg-blue-600"
  },
  {
    name: "Einstein's Mass-Energy Equivalence",
    equation: "E = mc²",
    description: "The energy content of a body is equal to its mass multiplied by the speed of light squared, showing the interchangeability of mass and energy.",
    derivation: "Einstein derived this equation from his special theory of relativity. It emerged from considering the relationship between momentum and energy in different reference frames. The equation shows that mass and energy are different manifestations of the same thing, with c² as the conversion factor.",
    variables: [
      "E = Energy",
      "m = Mass",
      "c = Speed of light (2.998 × 10⁸ m/s)"
    ],
    applications: [
      "Nuclear fusion in stars",
      "Mass defect in atomic nuclei",
      "Particle physics",
      "Relativistic effects"
    ],
    color: "bg-purple-600"
  },
  {
    name: "Kepler's Laws of Planetary Motion",
    equation: [
      "1. Orbits are ellipses with the Sun at one focus",
      "2. Equal areas are swept in equal times",
      "3. T² = (4π²/GM)r³"
    ],
    description: "Three fundamental laws describing the motion of planets around the Sun, which also apply to any orbiting bodies.",
    derivation: "Kepler discovered these laws by analyzing Tycho Brahe's precise astronomical observations. The third law was found by comparing the orbital periods and distances of different planets, revealing the mathematical relationship between orbital period and semi-major axis.",
    variables: [
      "T = Orbital period",
      "G = Gravitational constant",
      "M = Mass of central body",
      "r = Semi-major axis of orbit",
      "A = Area swept by radius vector",
      "t = Time"
    ],
    applications: [
      "Planetary motion prediction",
      "Satellite orbit design",
      "Exoplanet detection",
      "Space mission planning"
    ],
    color: "bg-green-600"
  },
  {
    name: "Tsiolkovsky Rocket Equation",
    equation: "Δv = vₑ ln(m₀/m₁)",
    description: "Describes the motion of vehicles that follow the basic principle of a rocket: propulsion by expelling part of their mass at high speed.",
    derivation: "Derived from the conservation of momentum principle. As the rocket expels mass (propellant) at high velocity, the rocket gains momentum in the opposite direction. The natural logarithm appears due to the changing mass of the rocket over time.",
    variables: [
      "Δv = Change in velocity",
      "vₑ = Exhaust velocity",
      "m₀ = Initial mass",
      "m₁ = Final mass"
    ],
    applications: [
      "Spacecraft design",
      "Mission planning",
      "Fuel requirements",
      "Launch vehicle staging"
    ],
    color: "bg-red-600"
  },
  {
    name: "Escape Velocity",
    equation: "vₑ = √(2GM/r)",
    description: "The minimum velocity needed for an object to escape a planet's gravitational field without further propulsion.",
    derivation: "Derived by equating the kinetic energy of an object with the gravitational potential energy needed to reach infinity. The equation comes from setting ½mv² = GMm/r and solving for v.",
    variables: [
      "vₑ = Escape velocity",
      "G = Gravitational constant",
      "M = Mass of the planet",
      "r = Distance from planet's center"
    ],
    applications: [
      "Space launches",
      "Planetary atmosphere retention",
      "Black hole physics",
      "Interplanetary travel"
    ],
    color: "bg-yellow-600"
  },
  {
    name: "Schwarzschild Radius",
    equation: "Rs = 2GM/c²",
    description: "The radius at which the escape velocity equals the speed of light, defining the event horizon of a black hole.",
    derivation: "Derived by setting the escape velocity equation equal to the speed of light and solving for radius. This comes from Einstein's field equations of general relativity when solved for a spherically symmetric mass.",
    variables: [
      "Rs = Schwarzschild radius",
      "G = Gravitational constant",
      "M = Mass of the object",
      "c = Speed of light"
    ],
    applications: [
      "Black hole physics",
      "Gravitational collapse",
      "Event horizon studies",
      "Spacetime curvature"
    ],
    color: "bg-indigo-600"
  },
  {
    name: "Relativistic Time Dilation",
    equation: "t' = t/√(1 - v²/c²)",
    description: "The slowing of time experienced by an object moving relative to an observer, or in a stronger gravitational field.",
    derivation: "Derived from the Lorentz transformation in special relativity. It emerges from the constancy of the speed of light in all reference frames and the relativity of simultaneity.",
    variables: [
      "t' = Dilated time",
      "t = Proper time",
      "v = Relative velocity",
      "c = Speed of light"
    ],
    applications: [
      "GPS corrections",
      "Particle accelerators",
      "Space travel",
      "Gravitational time dilation"
    ],
    color: "bg-pink-600"
  },
  {
    name: "Orbital Velocity",
    equation: "v = √(GM/r)",
    description: "The velocity needed to maintain a circular orbit at a given radius around a massive body.",
    derivation: "Derived by equating the centripetal force needed for circular motion with the gravitational force. The equation comes from mv²/r = GMm/r² and solving for v.",
    variables: [
      "v = Orbital velocity",
      "G = Gravitational constant",
      "M = Mass of central body",
      "r = Orbital radius"
    ],
    applications: [
      "Satellite orbits",
      "Space station positioning",
      "Orbital transfers",
      "Mission planning"
    ],
    color: "bg-cyan-600"
  },
  {
    name: "Gravitational Waves",
    equation: "h = 2GM/c²r",
    description: "Ripples in spacetime caused by accelerating massive objects, predicted by Einstein's theory of general relativity.",
    derivation: "Derived from the linearized Einstein field equations in the weak-field approximation. The equation describes the strain amplitude of gravitational waves far from their source.",
    variables: [
      "h = Strain amplitude",
      "G = Gravitational constant",
      "M = Mass of source",
      "c = Speed of light",
      "r = Distance to source"
    ],
    applications: [
      "LIGO detection",
      "Binary system studies",
      "Cosmological observations",
      "Early universe studies"
    ],
    color: "bg-teal-600"
  },
  {
    name: "Hubble-Lemaître Law",
    equation: "v = H₀d",
    description: "Describes the expansion of the universe, showing that galaxies move away from us at a speed proportional to their distance.",
    derivation: "Discovered empirically by Edwin Hubble through observations of galaxy redshifts and distances. Later explained theoretically through Einstein's field equations applied to an expanding universe.",
    variables: [
      "v = Recession velocity",
      "H₀ = Hubble constant",
      "d = Distance to galaxy"
    ],
    applications: [
      "Universe expansion",
      "Age of universe",
      "Dark energy studies",
      "Cosmological models"
    ],
    color: "bg-orange-600"
  },
  {
    name: "Einstein's Field Equations",
    equation: "Gᵤᵥ = 8πG/c⁴ Tᵤᵥ",
    description: "The fundamental equations of general relativity, describing how matter and energy curve spacetime.",
    derivation: "Einstein developed these equations over a decade, combining principles of general covariance, equivalence principle, and conservation of energy-momentum. The equations emerged from the requirement that gravity is a manifestation of spacetime curvature.",
    variables: [
      "Gᵤᵥ = Einstein tensor (describes spacetime curvature)",
      "G = Gravitational constant",
      "c = Speed of light",
      "Tᵤᵥ = Stress-energy tensor (describes matter/energy distribution)"
    ],
    applications: [
      "Black hole physics",
      "Cosmological models",
      "Gravitational waves",
      "Universe expansion"
    ],
    learnMore: "https://einstein.stanford.edu/SPACETIME/spacetime2.html",
    color: "bg-violet-600"
  },
  {
    name: "Maxwell's Equations in Space",
    equation: [
      "∇ · E = ρ/ε₀",
      "∇ · B = 0",
      "∇ × E = -∂B/∂t",
      "∇ × B = μ₀(J + ε₀∂E/∂t)"
    ],
    description: "Fundamental equations describing electromagnetic phenomena in space, crucial for understanding solar wind, magnetic fields, and cosmic radiation.",
    derivation: "Maxwell unified electricity and magnetism, synthesizing experimental laws of Gauss, Faraday, and Ampère, adding the displacement current term to complete the theory.",
    variables: [
      "E = Electric field",
      "B = Magnetic field",
      "ρ = Charge density",
      "J = Current density",
      "ε₀ = Vacuum permittivity",
      "μ₀ = Vacuum permeability"
    ],
    applications: [
      "Solar wind dynamics",
      "Planetary magnetospheres",
      "Cosmic radiation",
      "Space weather prediction"
    ],
    learnMore: "https://www.nasa.gov/feature/goddard/2019/how-nasa-helps-protect-earth-from-space-radiation",
    color: "bg-emerald-600"
  },
  {
    name: "Friedmann Equations",
    equation: [
      "ä/a = -4πG(ρ + 3p)/3 + Λc²/3",
      "(ȧ/a)² = 8πGρ/3 - kc²/a² + Λc²/3"
    ],
    description: "Describes the expansion of a homogeneous, isotropic universe in general relativity.",
    derivation: "Derived from Einstein's field equations applied to the FLRW metric, assuming the cosmological principle of a homogeneous and isotropic universe.",
    variables: [
      "a = Scale factor",
      "ρ = Energy density",
      "p = Pressure",
      "Λ = Cosmological constant",
      "k = Curvature parameter"
    ],
    applications: [
      "Universe expansion",
      "Big Bang theory",
      "Dark energy studies",
      "Cosmic evolution"
    ],
    learnMore: "https://map.gsfc.nasa.gov/universe/",
    color: "bg-amber-600"
  },
  {
    name: "Chandrasekhar Limit",
    equation: "M_Ch = 1.44 M_☉",
    description: "The maximum mass of a stable white dwarf star, beyond which electron degeneracy pressure cannot prevent gravitational collapse.",
    derivation: "Derived by balancing electron degeneracy pressure against gravitational force, using quantum mechanics and special relativity.",
    variables: [
      "M_Ch = Chandrasekhar mass limit",
      "M_☉ = Solar mass",
      "Derived using fundamental constants and quantum mechanics"
    ],
    applications: [
      "Stellar evolution",
      "Supernova prediction",
      "White dwarf physics",
      "Neutron star formation"
    ],
    learnMore: "https://science.nasa.gov/astrophysics/focus-areas/how-do-stars-form-and-evolve",
    color: "bg-rose-600"
  }
];

export function SpaceEquations() {
  const [selectedEquation, setSelectedEquation] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <div className="relative h-[60vh]">
        <SpaceEquationsScene equation={selectedEquation?.equation} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute bottom-0 left-0 right-0 text-center pb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            Fundamental Laws of Space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-3xl mx-auto px-4"
          >
            Explore the mathematical foundations that govern the cosmos
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equationsData.map((eq, index) => (
            <motion.div
              key={eq.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedEquation(eq);
                setShowInfo(true);
              }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Code className="h-6 w-6 text-purple-400" />
                  <div className={`h-1 w-16 ${eq.color} rounded-full opacity-50`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{eq.name}</h3>
                <div className="bg-black/30 p-4 rounded-lg mb-4">
                  {Array.isArray(eq.equation) ? (
                    eq.equation.map((e, i) => (
                      <p key={i} className="text-lg font-mono text-center mb-2">{e}</p>
                    ))
                  ) : (
                    <p className="text-2xl font-mono text-center">{eq.equation}</p>
                  )}
                </div>
                <p className="text-sm text-gray-400">{eq.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Equation Details Modal */}
      <AnimatePresence>
        {showInfo && selectedEquation && (
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
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">{selectedEquation.name}</h3>
                <div className="bg-black/30 p-6 rounded-xl">
                  {Array.isArray(selectedEquation.equation) ? (
                    selectedEquation.equation.map((eq, i) => (
                      <p key={i} className="text-2xl font-mono text-center mb-2">{eq}</p>
                    ))
                  ) : (
                    <p className="text-4xl font-mono text-center">{selectedEquation.equation}</p>
                  )}
                </div>
                <p className="text-gray-300">{selectedEquation.description}</p>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Derivation</h4>
                  <p className="text-gray-300">{selectedEquation.derivation}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3">Variables</h4>
                  <div className="space-y-2">
                    {selectedEquation.variables.map((variable, i) => (
                      <p key={i} className="text-sm text-gray-400">• {variable}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">Applications</h4>
                  <div className="space-y-2">
                    {selectedEquation.applications.map((app, i) => (
                      <p key={i} className="text-sm text-gray-400">• {app}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}