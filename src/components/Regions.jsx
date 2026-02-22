import { useState } from 'react'
import { X, Maximize } from 'lucide-react'

export default function Regions() {
    const [isMapOpen, setIsMapOpen] = useState(false)
    return (
        <section className="relative bg-[#111820] py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Top Content: Text + Map */}
                {/* Top Content: Text + Map */}
                <div className="flex flex-col items-center mb-16">
                    <div className="text-center max-w-3xl mb-12">
                        <h2 className="text-4xl md:text-5xl font-avenir-heavy text-[#b6a48e] mb-6 leading-tight">
                            Regiões onde atuamos
                        </h2>
                        <p className="text-[#e2d9c8]/80 text-lg font-light leading-relaxed">
                            Locais no litoral oeste do Ceará, com crescimento comprovado. Cada região foi cuidadosamente selecionada por seu potencial turístico, infraestrutura e perspectiva de valorização sustentável.
                        </p>
                    </div>

                    {/* Map - Highlighted & Large */}
                    <div
                        className="relative w-full max-w-6xl aspect-[16/9] rounded-[2rem] overflow-hidden border border-[#b6a48e]/20 shadow-2xl bg-[#1a2e35] group cursor-pointer"
                        onClick={() => setIsMapOpen(true)}
                    >
                        <img
                            src="/images/mapa.png"
                            alt="Mapa das Regiões"
                            className="w-full h-full object-contain p-2 md:p-6 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-white flex items-center gap-3 border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <Maximize className="w-5 h-5" />
                                <span className="uppercase tracking-widest text-sm font-bold">Ampliar Mapa</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Content: Cards */}
                <div className="text-center mb-12">
                    <h3 className="text-[#b6a48e] text-xl font-light tracking-wide">
                        Locais com destaque de crescimento e potencial emergente
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Region 1: Praia do Preá */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[4/3] shadow-lg border border-white/5">
                            <img src="/images/frenteMar.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <h4 className="text-white font-bold text-xl drop-shadow-md">Praia do Preá</h4>
                            </div>
                        </div>
                        <p className="text-[#e2d9c8]/70 text-sm leading-relaxed">
                            Epicentro do kitesurf com infraestrutura consolidada e demanda internacional constante.
                        </p>
                    </div>

                    {/* Region 2: Bitupitá */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[4/3] shadow-lg border border-white/5">
                            <img src="/images/biitupita.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <h4 className="text-white font-bold text-xl drop-shadow-md">Bitupitá</h4>
                            </div>
                        </div>
                        <p className="text-[#e2d9c8]/70 text-sm leading-relaxed">
                            Privacidade e conexão direta com o mar em ambiente preservado.
                        </p>
                    </div>

                    {/* Region 3: Curimãs */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[4/3] shadow-lg border border-white/5">
                            <img src="/images/curimas.jpg" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <h4 className="text-white font-bold text-xl drop-shadow-md">Curimãs</h4>
                            </div>
                        </div>
                        <p className="text-[#e2d9c8]/70 text-sm leading-relaxed">
                            Charme rústico com crescimento orgânico e comunidade estabelecida.
                        </p>
                    </div>

                    {/* Region 4: Ilha do Guajirú */}
                    <div className="group cursor-pointer">
                        <div className="rounded-2xl overflow-hidden mb-4 relative aspect-[4/3] shadow-lg border border-white/5">
                            <img src="/images/ilhadoguajiru.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                <h4 className="text-white font-bold text-xl drop-shadow-md">Ilha do Guajirú</h4>
                            </div>
                        </div>
                        <p className="text-[#e2d9c8]/70 text-sm leading-relaxed">
                            Paraíso natural entre mangue e mar, ideal para quem busca exclusividade.
                        </p>
                    </div>
                </div>
            </div>

            {/* Full Screen Map Modal */}
            {isMapOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setIsMapOpen(false)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
                        onClick={() => setIsMapOpen(false)}
                    >
                        <X size={40} />
                    </button>
                    <div
                        className="relative w-full h-full flex items-center justify-center p-4 md:p-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src="/images/mapa.png"
                            alt="Mapa Ampliado"
                            className="w-full h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300 bg-[#1a2e35]"
                        />
                    </div>
                </div>
            )}

        </section >
    )
}
