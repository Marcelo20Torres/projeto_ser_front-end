import handleConfirm from "../../controllers/register/confirmHandle";

export function ConfirmCode() {

    return (
        <main className="relative lg:flex">
            <div className="absolute inset-0 h-[1000px] lg:h-dvh lg:relative lg:w-2/3 lg:rounded-r-3xl lg:inset-auto"
                style={{ background: 'linear-gradient(to right, #3b82f6, #f97316)' }}>
                <div className='hidden lg:flex items-center h-full p-12 lg:p-15'>
                    <span className='font-bold text-4xl text-white'>Projeto Ser</span>
                </div>
            </div>

            <div className="relative z-10 flex justify-center items-center min-h-screen p-6 lg:w-1/3">
                <form onSubmit={handleConfirm}>
                    <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-9 lg:p-15">
                        <div className="flex flex-col items-center">
                            <span className="mt-1 font-bold text-2xl">Confirmar Código</span>
                            <span className="mt-1 text-sm text-gray-500">Código enviado para e-mail informado</span>
                        </div>

                        <div className="flex flex-col w-full h-3/5 mt-8 lg:mt-15">
                            <input name="code_verification" type="text" inputMode="numeric" pattern="[0-9]*" maxLength={6} placeholder="000000" className="w-full bg-gray-100 mt-2 border border-gray-200 rounded-md h-10 px-3" required />
                            <button type="submit" className="h-10 mt-10 rounded-md bg-linear-100 from-blue-500 to-orange-500 text-white font-bold cursor-pointer">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}