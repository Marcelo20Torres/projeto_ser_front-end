import { useState } from "react";
import Sidebar from '../components/Sidebar';
import { Headbar } from '../components/Headbar';
import { Outlet } from "react-router-dom";


export function AppLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen">
            <div className={`transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-0"} overflow-hidden`}>
                <Sidebar />
            </div>

            <div className="flex flex-col flex-1">
                <Headbar onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />
                <main className="flex-1 p-6 bg-gray-100 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
