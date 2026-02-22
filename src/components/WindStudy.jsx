export default function WindStudy() {
    return (
        <section className="relative bg-[#0f1519] py-20 px-6 md:px-12 text-[#e2d9c8]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-avenir-heavy text-[#e2d9c8] mb-2 leading-tight">
                        Inédito: <span className="text-white">Estudos dos Ventos</span>
                    </h2>
                    <p className="text-[#e2d9c8]/70 italic text-lg tracking-wide">
                        "Investidor informado, melhores decisões."
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                    {/* Left: Text Content */}
                    <div className="text-left space-y-6">
                        <h3 className="text-2xl font-bold text-white leading-snug">
                            O primeiro relatório de inteligência imobiliária da região.
                        </h3>
                        <p className="text-[#e2d9c8]/80 text-lg font-light leading-relaxed">
                            Terra Ventos apresenta: Quais locais mais crescem em valorização, onde está menos explorado e com o maior potencial. <span className="text-white font-bold">Mergulhe em dados e análise potencial do litoral Cearense.</span>
                        </p>
                    </div>

                    {/* Right: Image Mockup with Stats */}
                    <div className="relative flex justify-center items-center">
                        {/* Floating Stats - Top Right */}
                        <div className="absolute top-0 right-0 md:-right-8 animate-float-slow hidden md:block">
                            <div className="text-left">
                                <span className="text-white text-xs block opacity-70">Crescimento</span>
                                <span className="text-white font-bold text-lg">12% ROI ao ano</span>
                            </div>
                        </div>

                        {/* Floating Stats - Middle Left */}
                        <div className="absolute top-1/2 left-0 md:-left-8 -translate-y-1/2 animate-float-delayed hidden md:block">
                            <div className="text-right">
                                <span className="text-white text-xs block opacity-70">Valorização</span>
                                <span className="text-white font-bold text-lg">Constante</span>
                            </div>
                        </div>

                        {/* Floating Stats - Bottom Right */}
                        <div className="absolute bottom-10 right-0 md:-right-4 animate-float hidden md:block">
                            <div className="text-left">
                                <span className="text-white text-xs block opacity-70">Demanda</span>
                                <span className="text-white font-bold text-lg">Internacional</span>
                            </div>
                        </div>


                        {/* Tablet Mockup Placeholder */}
                        <div className="relative z-10 w-full max-w-md transform hover:scale-105 transition-transform duration-500">
                            <img
                                src="/images/estudosdosventos.png"
                                alt="Gráfico Estudo dos Ventos"
                                className="w-full h-auto drop-shadow-2xl rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <p className="text-[#e2d9c8]/90 text-lg leading-relaxed">
                        Nossa análise completa das regiões mais promissoras do litoral oeste, considerando esportes, eventos internacionais, demanda turística, crescimento urbano e potencial concreto de valorização.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <button className="bg-[#2E7D4D] text-white font-bold px-10 py-4 rounded-md shadow-lg hover:bg-[#25663f] transition-all hover:scale-105 uppercase tracking-wide cursor-pointer text-lg">
                        Acessar Estudo dos Ventos
                    </button>
                </div>

            </div>
        </section>
    )
}
