import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rudra Laser Art</h3>
            <p className="text-gray-400 mb-4">Cut • Mark • Create with Laser ⚡</p>
            <p className="text-gray-400">Professional laser cutting and customization services in Ahmedabad.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/booking" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 7567800813</li>
              <li>📞 9998434388</li>
              <li>📍 6 Bhagat Estate, Behind Galaxy Cinema, Naroda, Ahmedabad - 382330</li>
              <li>
                <a href="https://www.instagram.com/rudra_laser_art/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  📷 Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rudra Laser Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
