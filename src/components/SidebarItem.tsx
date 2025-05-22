import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, label, icon, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `group relative flex items-center px-3 py-3 text-sm font-medium transition-all duration-200 font-bold ${isActive
          ? 'text-white bg-cyan-300 glow-left-border rounded-md'
          : 'text-white hover:bg-cyan-300 hover:text-black'
        }`
      }
    >
      <span className="relative z-10 flex items-center">
        <span className="mr-3">{icon}</span>
        {label}
      </span>
    </NavLink>
  );
};

export default SidebarItem;