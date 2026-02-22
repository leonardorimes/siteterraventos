export default function UpcomingLaunches() {
    return (
        <section className="relative w-full bg-[#E5E5E5] py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                {/* Header */}
                <h2 className="text-3xl md:text-5xl font-avenir-heavy text-[#1a2e35] mb-6">
                    Próximos lançamentos Terra Ventos
                </h2>
                <p className="text-[#1a2e35]/80 text-lg max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                    Imóveis validados e prontos para o seu investimento. Cada propriedade foi criteriosaente avaliada quanto à documentação, localização e potencial de retorno.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Card 1: Villa do Inglês */}
                    <div className="bg-white rounded-[2rem] p-4 shadow-xl group cursor-pointer hover:scale-[1.02] transition-transform duration-300 transform-gpu">
                        <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                            <img
                                src="/images/viladoinfles.png"
                                alt="Villa do Inglês"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute top-4 left-4 bg-[#1a2e35]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Praia do Preá, Ceará
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-3xl md:text-4xl font-bold drop-shadow-2xl text-center px-4 leading-none">
                                    Villa do Inglês
                                </h3>
                            </div>
                        </div>
                        <h4 className="text-[#1a2e35] font-bold text-xl mb-2">Investimento flexível</h4>
                        <p className="text-[#1a2e35]/70 text-sm max-w-sm mx-auto leading-relaxed pb-2">
                            Propriedade completa com 2.100m² ou 12 terrenos independentes de 55m² a 75m²
                        </p>
                    </div>

                    {/* Card 2: Casa moderna Conduru III */}
                    <div className="bg-white rounded-[2rem] p-4 shadow-xl group cursor-pointer hover:scale-[1.02] transition-transform duration-300 transform-gpu">
                        <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                            <img
                                src="/images/casamoderna.jpg"
                                alt="Casa moderna Conduru III"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div className="absolute top-4 left-4 bg-[#1a2e35]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Praia do Preá, Ceará
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h3 className="text-white text-3xl md:text-4xl font-bold drop-shadow-2xl text-center px-4 leading-none">
                                    Casa moderna<br />Conduru III
                                </h3>
                            </div>
                        </div>
                        <h4 className="text-[#1a2e35] font-bold text-xl mb-2">Pronta para morar ou rentabilizar</h4>
                        <p className="text-[#1a2e35]/70 text-sm max-w-sm mx-auto leading-relaxed pb-2">
                            Casa alto padrão em condomínio beira-mar, projeto Terra Ventos & Patricia Mureta Design
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="flex justify-center">
                    <button className="bg-[#2E7D4D] text-white font-bold px-10 py-4 rounded-md shadow-lg hover:bg-[#25663f] transition-all hover:scale-105 uppercase tracking-wide cursor-pointer text-lg">
                        Entrar na lista de espera
                    </button>
                </div>
            </div>
        </section>
    )
}
