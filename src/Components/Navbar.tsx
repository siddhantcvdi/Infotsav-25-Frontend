// 2025 design implemented

import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";
import { Calendar, Trophy, Users, Mail } from "lucide-react";
import logo from "../assets/logo.png";

function Navbar() {
    const location = useLocation();
    const homeClassName = location.pathname === "/" ? "text-sm font-bold text-red-100 tracking-wider border-b-2 border-red-500 pb-1" : "text-sm font-bold text-red-900/70 tracking-wider";

    return (
        <nav className="absolute top-0 left-0 right-0 z-30 p-8">
        <div className="bg-gradient-to-r from-red-900/30 via-red-800/20 to-red-900/30 backdrop-blur-md rounded-2xl border border-red-700/40 shadow-2xl px-10 py-4 mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
            <div className="flex items-center space-x-10">
                <NavItem icon={<img src={logo} alt="" className="w-7 h-7"/>} to="/" className={homeClassName} text="INFOTSAV" />
                <NavItem icon={<Calendar className="w-4 h-4" />} to="/events" text="EVENTS" />
                <NavItem icon={<Trophy className="w-4 h-4" />} to="/competitions" text="COMPETITIONS" />
                <NavItem icon={<Users className="w-4 h-4" />} to="/sponsors" text="SPONSORS" />
            </div>
            <div className="flex items-center space-x-10">
                <NavItem to="/register" icon={<Calendar className="w-4 h-4" />} text="REGISTER" highlight />
                <NavItem icon={<Mail className="w-4 h-4" />} to="/contact" text="CONTACT" />
            </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
