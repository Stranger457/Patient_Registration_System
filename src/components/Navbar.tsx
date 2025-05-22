import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Hospital, UserCircle } from 'lucide-react';

interface NavbarProps {
    onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
    return (
        <nav className="backdrop-blur-md bg-white/100 border-b border-white/20">
            <div className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                            onClick={onMenuClick}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center space-x-4">
                                <Hospital className="h-8 w-8 text-primary-600" />
                                <span className="text-xl font-bold text-primary-800">MedBlocks</span>

                                {/* Horizontal Glowing Lines */}
                                <div className="flex flex-col justify-center space-y-1 ml-4">
                                    <span className="w-220 h-0.5 bg-blue-500 rounded-full animate-pulse"></span>
                                    <span className="w-230 h-0.5 bg-pink-400 rounded-full animate-pulse delay-100"></span>
                                    <span className="w-242 h-0.5 bg-blue-300 rounded-full animate-pulse delay-200"></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="ml-3 relative flex items-center space-x-2">
                            {/* Profile Icon */}
                            <UserCircle className="h-6 w-6 text-primary-600" />

                            {/* Doctor's Name */}
                            <span className="text-sm font-medium text-gray-700 hidden md:block">
                                Dr.Vallipi
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;