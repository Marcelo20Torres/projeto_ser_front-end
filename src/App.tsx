import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Settings, User } from "lucide-react";
import Sidebar from './components/Sidebar';

import DashboardPage from './pages/DashboardPage'
import { Headbar } from './components/Headbar';
import AthletesPage from './pages/AthletesPage';

export default function App() {
  const links = [
      { label: "Início", icon: <Home />, path: "/" },
      { label: "Configurações", icon: <Settings />, path: "/settings" },
      { label: "Perfil", icon: <User />, path: "/profile" },
    ];
  const [sideBarOpen, setSideBarOpen] = useState(true);


  return (
    <BrowserRouter>
      <div className="flex h-screen">

       <div className={`transition-al duration-300 ${
        sideBarOpen ? "w-64" : "w-0"
       } overflow-hidden`}
       >
        <Sidebar />
       </div>

        <div className="flex flex-col flex-1">
          <Headbar onToggleSidebar={() => setSideBarOpen(!sideBarOpen)} />
          <main className="flex-1 p-6 bg-gray-100 overflow-auto">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/athletes" element={<AthletesPage />} />
{/*               
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/ranking" element={<RankingPage />} />
  */}          
            </Routes>
          </main>
        </div>
      </div>
      </BrowserRouter>


  )

}
