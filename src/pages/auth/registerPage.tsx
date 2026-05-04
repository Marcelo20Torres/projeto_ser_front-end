import handleRegister from "../../controllers/register/registerHandle"
import { Eye } from "lucide-react"

export function RegisterPage () {

    function toggleSenha(inputID: string) {
        const inputSenha = document.getElementById(inputID) as HTMLInputElement | null;


        if (inputSenha){
            if (inputSenha.type === "password") {
                inputSenha.type = "text";
            } else {
                inputSenha.type = "password"
            }
        }
    }

    return (
        <main className="relative lg:flex">
                    <div className="absolute inset-0 h-[1000px] lg:h-dvh lg:relative lg:w-2/3 lg:rounded-r-3xl lg:inset-auto"
                    style={{ background: 'linear-gradient(to right, #3b82f6, #f97316)'}}>
                        <div className='hidden lg:flex items-center h-full p-12 lg:p-15'>
                            <span className='font-bold text-4xl text-white'>Projeto Ser</span>
                        </div>
                    </div>
        
                    <div className="relative z-10 flex justify-center items-center min-h-screen p-6 lg:w-1/3">
                        <form onSubmit={handleRegister}>
                            <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-9 lg:p-15">
                                <div className="flex flex-col items-center">
                                    <span className="mt-1 font-bold text-2xl">Criar Conta</span>
                                    <span className="mt-1 text-sm text-gray-500">Preencha os dados para o registro</span>
                                </div>
        
                                <div className="flex flex-col w-full h-3/5 mt-8 lg:mt-15">

                                    <div className="flex w-full gap-3">
                                        <div className="flex flex-col flex-1">
                                            <span className="font-bold">Nome</span>
                                            <input name="name" type="text" placeholder="Jailson" className="w-full bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required/>
                                        </div>

                                        <div className="flex flex-col flex-1">
                                            <span className="font-bold">Sobrenome</span>
                                            <input type="text" placeholder="Mendes" className="w-full bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required/>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-8">
                                        <span className="font-bold">E-mail</span>
                                        <input name="email" type="email" placeholder="seu@email.com" className="bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required/>
                                    </div>
                                    
                                    <div className="flex w-full gap-3 mt-8">
                                        <div className="flex flex-col flex-1">
                                            <span className="font-bold">Senha</span>
                                            <div className="relative">
                                                <input name="password" id="senha" type="password" placeholder="••••••••" className="w-full bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required/>
                                                <button type='button' onClick={() => toggleSenha("senha")} className='absolute right-3 top-3/5 -translate-y-1/2 z-10 cursor-pointer'>
                                                    <Eye size={20} color='gray'/>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col flex-1">
                                            <span className="font-bold">Confirmar</span>
                                            <div className="relative">
                                                <input id="confsenha" type="password" placeholder="••••••••" className="w-full bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required/>
                                                <button type='button' onClick={() => toggleSenha("confsenha")} className='absolute right-3 top-3/5 -translate-y-1/2 z-10 cursor-pointer'>
                                                    <Eye size={20} color='gray'/>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
        
                                    <button type="submit" className="h-10 mt-10 rounded-md bg-linear-100 from-blue-500 to-orange-500 text-white font-bold cursor-pointer">Registrar</button>
                                    <div className='flex justify-center'>
                                        <span className='text-sm mt-1 text-gray-500'>Já tem uma conta?</span>
                                        <a className='mt-1 text-sm text-blue-400 font-bold px-3' href="/login">Faça login</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
    )
}