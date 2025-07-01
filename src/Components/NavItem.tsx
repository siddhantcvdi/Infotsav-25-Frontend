// 2025 design implemented

import { Link } from "react-router-dom";

interface NavItemProps {
  icon?: React.ReactNode;
  text: string;
  highlight?: boolean;
  className?: string;
  to: string;
}

function NavItem({ icon, text, highlight = false, to }: NavItemProps) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-2 text-red-100 hover:text-red-500 transition-colors duration-300 ${
        highlight ? "bg-red-700/20 rounded-lg px-4 py-2" : ""
      }`}
    >
      {icon && <div className="text-sm">{icon}</div>}
      <span className="text-sm font-medium tracking-wider">{text}</span>
    </Link>
  );
}

export default NavItem;
