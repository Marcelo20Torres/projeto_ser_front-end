import handleLogin from '../../controllers/login/loginHandle'
import { Eye } from "lucide-react"

export function LoginPage () {

    function toggleSenha() {
        const input = document.getElementById("senha") as HTMLInputElement | null;


        if (input){
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password"
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

            <div className="relative z-10 flex justify-center items-center min-h-screen lg:w-1/3">
                <form onSubmit={handleLogin}>
                    <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-9 lg:p-15">
                        <div className="flex flex-col items-center">
                            <span className="mt-1 font-bold text-2xl">Bem Vindo</span>
                            <span className="mt-1 text-sm text-gray-500">Faça login para acessar o sistema</span>
                        </div>

                        <div className="flex flex-col w-full h-3/5 mt-8 lg:mt-15">
                            <span className="font-bold">E-mail</span>
                            <input name="useremail" type="email" placeholder="seu@email.com" className="bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required />

                            <div className="flex flex-col mt-8">
                                <span className="font-bold">Senha</span>
                                <div className='relative'>
                                    <input name="userpassword" id='senha' type="password" placeholder="••••••••" className="bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3 w-full pr-10" required />
                                    <button type='button' onClick={toggleSenha} className='absolute right-3 top-3/5 -translate-y-1/2 z-10 cursor-pointer'>
                                        <Eye size={20} color='gray'/>
                                    </button>
                                </div>
                            </div>

                            <button type="submit" className="h-10 mt-10 rounded-md bg-linear-100 from-blue-500 to-orange-500 text-white font-bold cursor-pointer">Entrar</button>
                            <div className='flex justify-center'>
                                <span className='text-sm mt-1 text-gray-500'>Nao tem uma conta?</span>
                                <a className='mt-1 text-sm text-blue-400 font-bold px-3' href="/register">Registre-se aqui</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}