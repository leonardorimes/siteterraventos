import { ChevronDown, Search } from 'lucide-react'

export default function SearchWidget() {
    return (
        <div className="w-full bg-[#111820] py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-24 text-left mx-auto px-6 md:px-12">
                {/* Text Content */}
                <div className="max-w-lg">
                    <h2 className="text-3xl font-avenir-heavy text-[#b6a48e] mb-4 leading-tight">
                        Oportunidades exclusivas em regiões<br />
                        estratégicas do litoral oeste cearense.
                    </h2>
                    <p className="text-[#e2d9c8]/80 font-light text-lg">
                        Nossa curadoria apresenta imóveis que alinham<br />
                        beleza natural, infraestrutura consolidada e<br />
                        potencial de valorização.
                    </p>
                </div>

                {/* Search Form Widget */}
                <div className="w-full max-w-2xl">
                    <div className="flex justify-center mb-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-[#e2d9c8] text-xs font-medium">Encontre o investimento que melhor se encaixa no seu perfil</span>
                            <span className="bg-[#b6a48e] text-[#111820] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide animate-pulse">Em breve</span>
                        </div>
                    </div>

                    <div className="bg-[#dccdb8] rounded-[2rem] p-8 shadow-xl">

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {/* Location */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase font-bold text-[#1a2e35]/60 tracking-wider">Cidade ou localização</label>
                                <div className="relative">
                                    <select className="w-full bg-white/50 backdrop-blur-sm rounded-md px-3 py-2 text-sm font-medium text-[#1a2e35] appearance-none border border-transparent focus:border-[#1a2e35] outline-none">
                                        <option>Preá, Ceará</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1a2e35]/60 pointer-events-none" />
                                </div>
                            </div>

                            {/* Value */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase font-bold text-[#1a2e35]/60 tracking-wider">Valor máximo</label>
                                <div className="relative">
                                    <select className="w-full bg-white/50 backdrop-blur-sm rounded-md px-3 py-2 text-sm font-medium text-[#1a2e35] appearance-none border border-transparent focus:border-[#1a2e35] outline-none">
                                        <option>R$ 100.000,00</option>
                                        <option>R$ 200.000,00</option>
                                        <option>R$ 500.000,00</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1a2e35]/60 pointer-events-none" />
                                </div>
                            </div>

                            {/* Type */}
                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase font-bold text-[#1a2e35]/60 tracking-wider">Tipo de investimento</label>
                                <div className="relative">
                                    <select className="w-full bg-white/50 backdrop-blur-sm rounded-md px-3 py-2 text-sm font-medium text-[#1a2e35] appearance-none border border-transparent focus:border-[#1a2e35] outline-none">
                                        <option>Frente-mar</option>
                                        <option>Casas</option>
                                        <option>Terrenos</option>
                                        <option>Projetos</option>
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1a2e35]/60 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#1a2e35] text-[#e2d9c8] font-bold py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#111820] transition-colors shadow-md cursor-pointer">
                            <Search className="h-4 w-4" /> Buscar oportunidades disponíveis
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
