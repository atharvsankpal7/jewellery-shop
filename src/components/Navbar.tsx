import React from 'react';
import { Link } from 'react-router-dom';
import { Diamond, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-6">
          <Link to="/" className="flex items-center space-x-3">
            <Diamond className="h-10 w-10 text-purple-700" />
            <span className="text-3xl font-serif font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Lumière
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Home
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-700 transition-colors font-medium">
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}