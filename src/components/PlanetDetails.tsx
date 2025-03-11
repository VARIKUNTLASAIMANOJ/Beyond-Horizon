import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const planetData = {
  Mercury: {
    title: "Mercury",
    description: "The smallest and innermost planet in the Solar System. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to Venus.",
    facts: [
      "Surface Temperature: -180°C to 430°C",
      "Distance from Sun: 57.9 million km",
      "Orbital Period: 88 Earth days",
      "Diameter: 4,879 km"
    ],
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&w=1024&q=80"
  },
  Venus: {
    title: "Venus",
    description: "Often called Earth's sister planet due to their similar size, Venus has a toxic atmosphere and extreme surface temperatures due to runaway greenhouse effect.",
    facts: [
      "Surface Temperature: 462°C",
      "Distance from Sun: 108.2 million km",
      "Orbital Period: 225 Earth days",
      "Diameter: 12,104 km"
    ],
    image: "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?auto=format&fit=crop&w=1024&q=80"
  },
  Earth: {
    title: "Earth",
    description: "Our home planet is the only known world to support life. It's the third planet from the Sun and the only planet known to have liquid water on its surface.",
    facts: [
      "Surface Temperature: -88°C to 58°C",
      "Distance from Sun: 149.6 million km",
      "Orbital Period: 365.25 days",
      "Diameter: 12,742 km"
    ],
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1024&q=80"
  },
  Mars: {
    title: "Mars",
    description: "The Red Planet has captured human imagination for centuries. It's the focus of many exploration missions and potential future human colonization.",
    facts: [
      "Surface Temperature: -140°C to 20°C",
      "Distance from Sun: 227.9 million km",
      "Orbital Period: 687 Earth days",
      "Diameter: 6,779 km"
    ],
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1024&q=80"
  }
};

export function PlanetDetails({ onClose, selectedPlanet, setSelectedPlanet }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Solar System Explorer</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(planetData).map(([name, data]) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPlanet(name)}
              className={`bg-gray-800/50 rounded-xl p-4 cursor-pointer transition-colors ${
                selectedPlanet === name ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={data.image}
                  alt={name}
                  className="object-cover w-full h-48 rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{data.title}</h3>
              {selectedPlanet === name && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <p className="text-gray-300">{data.description}</p>
                  <div className="space-y-2">
                    {data.facts.map((fact, index) => (
                      <p key={index} className="text-sm text-gray-400">
                        • {fact}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}