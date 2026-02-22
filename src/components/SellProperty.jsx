import { Waves } from 'lucide-react'

export default function SellProperty() {
    return (
        <div className="bg-[#111820] w-full pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl items-center gap-32 text-left mx-auto px-6 md:px-12">
                {/* Left Image */}
                <div className="w-full h-[400px] overflow-hidden rounded-[3rem] shadow-2xl relative">
                    <img
                        src="/images/encontreSession.png"
                        alt="Casa de luxo"
                        className="w-full h-full object-cover"
                    />
                    {/* Border Overlay */}
                    <div className="absolute inset-0 border border-white/10 rounded-[3rem] pointer-events-none"></div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-center lg:items-center text-center lg:text-center">
                    <h2 className="text-3xl md:text-5xl font-avenir-heavy text-[#b6a48e] mb-6 leading-tight">
                        Acelere a venda do seu<br />
                        imóvel com a Terra Ventos
                    </h2>
                    <p className="text-[#e2d9c8]/80 font-light text-lg mb-8 max-w-lg">
                        Encontramos o investidor ideal e cuidamos<br />
                        de toda a parte burocrática para você.
                    </p>

                    <button className="bg-[#2E7D4D] text-white font-bold px-8 py-3 rounded-md shadow-md hover:bg-[#25663f] transition-all hover:scale-105 mb-8 cursor-pointer">
                        Quero vender meu imóvel
                    </button>

                    <Waves className="h-8 w-12 text-[#e2d9c8] opacity-80" strokeWidth={1.5} />
                </div>
            </div>
        </div>
    )
}
