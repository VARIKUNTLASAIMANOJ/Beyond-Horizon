import React from 'react';
import { RocketIcon, Menu } from 'lucide-react';

export function Navigation({ onNavigate, currentSection }) {
  const handleLogoClick = () => {
    onNavigate('home');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <RocketIcon className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold text-white">Beyond Horizon</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => onNavigate('discoveries')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'discoveries' ? 'text-white bg-purple-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Space Discoveries
              </button>
              <button
                onClick={() => onNavigate('missions')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'missions' ? 'text-white bg-purple-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Space Missions
              </button>
              <button
                onClick={() => onNavigate('equations')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'equations' ? 'text-white bg-purple-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Space Laws
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentSection === 'contact' ? 'text-white bg-purple-600' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}