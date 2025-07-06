// 2025 design implemented

import { useLocation } from "react-router-dom";
import { Calendar, Handshake, Users, Menu, Mail, X } from "lucide-react";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const homeClassName = location.pathname === "/"
    ? "text-sm font-bold text-red-100 tracking-wider border-b-2 border-red-500 pb-1"
    : "text-sm font-bold text-red-900/70 tracking-wider";


    useEffect(() => {
      const main = document.querySelector('main');
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        if (main) (main as HTMLElement).style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (main) (main as HTMLElement).style.overflow = '';
      }
      return () => {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (main) (main as HTMLElement).style.overflow = '';
      };
    }, [isMobileMenuOpen]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 p-8">
      <div className={`mx-auto max-w-7xl relative px-10 py-4 ${isMobileMenuOpen ? '' : 'bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 backdrop-blur-md rounded-2xl border border-red-700/40 shadow-2xl'}`}>
        <div className="flex items-center justify-between">
          {/* Logo and Infotsav */}
          <div className="flex items-center space-x-10">
            <NavItem
              icon={<img src="/src/assets/Logo.png" alt="INFOTSAV" className="w-7 h-7" />}
              to="/"
              className={homeClassName}
              text="INFOTSAV"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-between">
            <div className="flex ml-10 space-x-10">
              <NavItem
                icon={<Calendar className="w-4 h-4" />}
                to="/events"
                text="EVENTS"
              />
              <NavItem
                icon={<Handshake className="w-4 h-4" />}
                to="/campus-ambassador"
                text="CA PROGRAM"
              />
              <NavItem
                icon={<Users className="w-4 h-4" />}
                to="/sponsors"
                text="SPONSORS"
              />
            </div>
            <div className="flex items-center space-x-10 ml-auto">
              <NavItem
                to="/register"
                icon={<Calendar className="w-4 h-4" />}
                text="REGISTER"
                highlight
              />
              <NavItem
                icon={<Mail className="w-4 h-4" />}
                to="/contact"
                text="CONTACT"
              />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-red-100 hover:text-red-500 transition-colors duration-300"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Fullscreen Mobile Overlay Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black flex flex-col">
            {/* Top bar: Logo + INFOTSAV + Close button */}
            <div className="flex items-center justify-between px-6 pt-8">
              <div className="flex items-center space-x-4">
                <img src="/src/assets/Logo.png" alt="INFOTSAV" className="w-10 h-10" />
                <span className="text-2xl font-bold tracking-widest text-white">INFOTSAV</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-red-500 transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            {/* Centered Nav Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-10">
              <NavItem
                icon={<Calendar className="w-8 h-8" />}
                to="/events"
                text="EVENTS"
                className="flex items-center gap-4 text-white text-2xl font-semibold py-3 px-8 rounded-lg hover:bg-red-800/40 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavItem
                icon={<Handshake className="w-8 h-8" />}
                to="/campus-ambassador"
                text="CA PROGRAM"
                className="flex items-center gap-4 text-white text-2xl font-semibold py-3 px-8 rounded-lg hover:bg-red-800/40 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavItem
                icon={<Users className="w-8 h-8" />}
                to="/sponsors"
                text="SPONSORS"
                className="flex items-center gap-4 text-white text-2xl font-semibold py-3 px-8 rounded-lg hover:bg-red-800/40 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavItem
                icon={<Calendar className="w-8 h-8" />}
                to="/register"
                text="REGISTER"
                className="flex items-center gap-4 text-white text-2xl font-semibold py-3 px-8 rounded-lg hover:bg-red-800/40 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <NavItem
                icon={<Mail className="w-8 h-8" />}
                to="/contact"
                text="CONTACT"
                className="flex items-center gap-4 text-white text-2xl font-semibold py-3 px-8 rounded-lg hover:bg-red-800/40 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
