
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">STELLAR</span>
              <span>SCHOOL</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Inspiring minds and shaping futures. Where excellence meets opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors duration-200">Our Programs</a></li>
              <li><a href="#achievements" className="text-gray-400 hover:text-white transition-colors duration-200">Achievements</a></li>
              <li><a href="#campus" className="text-gray-400 hover:text-white transition-colors duration-200">Campus</a></li>
              <li><a href="#admissions" className="text-gray-400 hover:text-white transition-colors duration-200">Admissions</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Student Handbook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Parent Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Library Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support Stellar</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">News & Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest news and events from Stellar School.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Stellar School.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Stellar School. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
