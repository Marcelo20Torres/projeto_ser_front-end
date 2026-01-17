import { Bell, Sidebar, User } from "lucide-react";
import type React from "react";

type HeadbarProps = {
    onToggleSidebar: () => void;
};  

export function Headbar({ onToggleSidebar }: HeadbarProps) {
    return (
        <header className="flex justify-between items-center bg-[#FAFAFA] border-b border-gray-200 p-3">
            
            <div className="flex flex-row gap-4">
                <button onClick={onToggleSidebar} className="p-2 cursor-pointer rounded hover:bg-orange-400 group">
                    <Sidebar size={20} className="group-hover:text-white"/>
                </button>
                <h1 className="text-xl font-bold text-gray-600">Volley-Manager Gestão</h1>
            </div>

            <div className="flex items-center gap-4 mr-4">  
                <button className="hover:gb-gray-100 p-2 rounded-full">
                    <Bell size={20} />
                </button>
                <div className="flex items-center gap-2">
                    <User size={20}/>
                    <span className="text-sm font-medium">Marcelo</span>
                </div>

            </div>
        </header>
    )
}
