import { useState, type JSX } from "react"
import { Home, BarChart2, Settings, LogOut, Users, LucideTrophy, LucideMedal, UserCog, DollarSign, LucideUserCheck, Import} from "lucide-react";






const Sidebar:  React.FC = () => {
    return (
        <aside className="w-64 bg-[#FAFAFA] text-black flex flex-col p-4 h-screen border-r border-gray-200">
            <div className="text-xl font-bold mb-8 flex flex-row p-1"> 
                Volley Manager
            </div>


            <div className="">
                <span className="text-gray-800   mb-3 text-sm">Principal</span>

                <nav className="flex flex-col gap-3 mt-3">
                    <div>
                        <a href="/dashboard" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <Home size={20} /> Dashboard
                        </a>
                    </div>
                    <div>
                        <a href="/athletes" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <Users size={20} /> Atletas
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <BarChart2 size={20} /> Estatísticas
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <LucideTrophy size={20} /> Jogos
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <LucideMedal size={20} /> Ranking
                        </a>
                    </div>
                </nav>
            </div>


            <div className="mt-10">
                <span className="text-gray-800 mt-6 mb-3 text-sm">Gestão</span>

                <nav className="flex flex-col gap-3 mt-3">
                    <div>
                        <a href="#" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <DollarSign size={20} /> Financeiro
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <LucideUserCheck size={20} /> Frequencia
                        </a>
                    </div>
                    <div>
                        <a href="#" className="flex p-1 items-center gap-2 hover:bg-gray-300 rounded">
                            <UserCog size={20} /> Alunos
                        </a>
                    </div>

                </nav>
            </div>
            



            <div className="flex-1"></div>

            <nav className="flex flex-col gap-4">
                <div >
                    <a href="#" className="flex items-center gap-2 p-1 hover:bg-gray-300 rounded">
                        <Settings size={20} /> Configurações
                    </a>
                </div>
                <div className="mb-5">
                    <a href="#" className="flex items-center gap-2 p-1 hover:bg-gray-300 rounded">
                        <LogOut size={20} /> Sair
                    </a>
                </div>
            </nav>
            


            <div className="text-sm text-black-400">@ 2025 Projeto Ser Volley</div>

        </aside>

        
    )
}

export default Sidebar;