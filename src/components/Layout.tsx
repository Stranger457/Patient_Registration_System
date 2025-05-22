import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: "url('/modern.jpg')" }}
        >
            <div className="bg-white/10 backdrop-sm flex-1 flex flex-col">
                <Navbar onMenuClick={() => setSidebarOpen(true)} />
                <div className="flex flex-1 overflow-hidden">
                    <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
                        <div className="max-w-7xl mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;