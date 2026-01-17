import { Users, BarChart2, LucideTrophy, LucideMedal } from "lucide-react";
import React from "react";



const DashboardPage: React.FC = () => {
    return (
        <div className="bg-white-100 min-h-screen p-4 flex flex-col gap-10">

            <div className=" p-9 w-full h-70 bg-linear-80 from-blue-500 to-orange-500 rounded-xl">
                <h1 className="text-5xl font-bold text-white">VolleyStats</h1>

                <div className="flex flex-row gap-4 mt-15">
                    <div className=" flex flex-row border border-white/80 rounded-md w-40 h-10 gap-5 items-center justify-center text-white font-bold hover:bg-white/20 cursor-pointer">
                        <Users size={20}/> Atletas
                    </div>
                    <div className=" flex flex-row border border-white/80 rounded-md w-40 h-10 gap-5 items-center justify-center text-white font-bold hover:bg-white/20 cursor-pointer">
                        <BarChart2 size={20}/> Estatísticas
                    </div>
                    <div className=" flex flex-row border border-white/80 rounded-md w-40 h-10 gap-5 items-center justify-center text-white font-bold hover:bg-white/20 cursor-pointer">
                        <LucideTrophy size={20}/> Jogos
                    </div>
                    <div className=" flex flex-row border border-white/80 rounded-md w-40 h-10 gap-5 items-center justify-center text-white font-bold hover:bg-white/20 cursor-pointer">
                        <LucideMedal size={20}/> Ranking
                    </div>
                    
                </div>

            </div>

            <div className="flex flex-row justify-between">
                <div className=" flex-1 mx-2 bg-white w-80 h-35 rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">

                </div>
                <div className=" flex-1 mx-2 bg-white w-80 h-35 rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">

                </div>
                <div className=" flex-1 mx-2 bg-white w-80 h-35 rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">

                </div>
                <div className=" flex-1 mx-2 bg-white w-80 h-35 rounded-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out">

                </div>
            </div>

            <div className="flex flex-col mx-2 bg-white w-full h-110 rounded-xl p-9" style={{ boxShadow: "0 0 10px 1px rgba(70, 70, 70, 0.15)"}}>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <div className="h-15 w-15 bg-linear-100 from-blue-500 to-orange-500 rounded-xl flex items-center justify-center text-white">
                            <LucideMedal size={35}/>
                        </div>
                        <span className="font-bold text-2xl ml-3 mt-3">Top 3 Atletas do Mês</span>
                    </div>
                    <span className="mt-3 text-gray-500">Ranking baseado em pontos, saques, bloqueios e defesas</span>
                </div>

                <div className=" flex flex-row items-center justify-between mt-8">
                    <div className="h-60 w-100 bg-linear-50 from-[#F9FAFC] to-[#F4F6FA] rounded-xl border border-gray-300/80 hover:shadow-xl shadow-[#EFBC11] transition-shadow duration-300 ease-in-out">

                    </div>
                    <div className="h-60 w-100 bg-linear-50 from-[#F9FAFC] to-[#F4F6FA] rounded-xl border border-gray-300/80 hover:shadow-xl shadow-[#BABFC6] transition-shadow duration-300 ease-in-out">

                    </div>
                    <div className="h-60 w-100 bg-linear-50 from-[#F9FAFC] to-[#F4F6FA] rounded-xl border border-gray-300/80 hover:shadow-xl shadow-[#E78D0B] transition-shadow duration-300 ease-in-out">

                    </div>
                </div>
                
            </div>

        </div>
    )

}

export default DashboardPage;