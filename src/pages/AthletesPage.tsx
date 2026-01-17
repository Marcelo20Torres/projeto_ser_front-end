import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";


const filters = ["Todas", "Masculino", "Feminino"];

const AthletesPage: React.FC = () => {
    const [selected, setSelected] = useState("Todas");


    return (
            <div className="p-4 flex flex-col gap-10 min-h-screen">

                <div className=" flex flex-row justify-between gap-10">
                    <div className="h-35 min-w-300 flex-1 bg-white rounded-xl">
                    
                    </div>
                    <div className="h-35 min-w-80 max-w-100 flex-1 bg-white rounded-xl">

                    </div>
                </div>

                <div className="flex flex-row bg-white h-20 rounded-xl p-4 items-center gap-5 relative">
                    <span className="absolute left-6 top-1/3 -trasnlate-y-1/2 text-gray-400">
                        <Search size={22}/>
                    </span>
                    <input type="text" placeholder="Buscar por nome, posição ou classe..." className="pl-10 bg-gray-200/50 rounded-md h-11 w-full border border-gray-300" />
                    <div className="p-1 flex gap-5 bg-gray-100 h-11 rounded-md items-center text-gray-600">
                        {filters.map((filter) => (
                            <span key={filter} onClick={() => setSelected(filter)} className={`px-4 py-2 rounded-md cursor-pointer transition
                                ${selected === filter
                                    ? "bg-white text-gray-800 font-semibold shadow border border-gray-200"
                                    : ""}`}
                            >
                                {filter}
                            </span>
                        ))}
                    </div>
                </div>


            </div>

    )
}

export default AthletesPage;