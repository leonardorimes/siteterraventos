import { Waves } from 'lucide-react'

export default function PropertyCategories() {
    return (
        <section className="relative bg-[#111820] px-6 py-20 md:px-12 text-center text-[#e2d9c8]">
            <div className="flex flex-col items-center mb-12">
                {/* Enfeite Ventos */}
                <img src="/images/enfeiteVentos.png" alt="Enfeite Ventos" className="h-12 w-auto mb-6 opacity-80" />

                <h2 className="text-3xl md:text-5xl font-avenir-heavy mb-12 text-[#e2d9c8] drop-shadow-sm">
                    Encontre seu próximo imóvel<br />
                    no Litoral do Ceará.
                </h2>

                {/* Property Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                    {/* Card 1: Frente-mar */}
                    <div className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3]">
                            <img
                                src="/images/frenteMar.png"
                                alt="Frente-mar"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-[#1a2e35]">Frente-mar</h3>
                        <p className="text-sm md:text-base text-[#1a2e35]/80 font-light max-w-[200px] mx-auto pb-4 leading-relaxed">
                            Propriedades com acesso direto ao oceano
                        </p>
                    </div>

                    {/* Card 2: Casas */}
                    <div className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3]">
                            <img
                                src="/images/casas.png"
                                alt="Casas"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-[#1a2e35]">Casas</h3>
                        <p className="text-sm md:text-base text-[#1a2e35]/80 font-light max-w-[200px] mx-auto pb-4 leading-relaxed">
                            Residências de alto padrão prontas para morar
                        </p>
                    </div>

                    {/* Card 3: Terrenos */}
                    <div className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3]">
                            <img
                                src="/images/terrenos.jpg"
                                alt="Terrenos"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-[#1a2e35]">Terrenos</h3>
                        <p className="text-sm md:text-base text-[#1a2e35]/80 font-light max-w-[200px] mx-auto pb-4 leading-relaxed">
                            Lotes estratégicos para construção, valorização e projetos
                        </p>
                    </div>

                    {/* Card 4: Projetos */}
                    <div className="group cursor-pointer bg-white rounded-[2rem] p-4 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-2xl mb-6 relative aspect-[4/3]">
                            <img
                                src="/images/projetos.png"
                                alt="Projetos"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Highlight Overlay (Red box mockup from design) */}
                            <div className="absolute top-[20%] left-[20%] w-[60%] h-[40%] border-2 border-red-500/70 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-[#1a2e35]">Projetos</h3>
                        <p className="text-sm md:text-base text-[#1a2e35]/80 font-light max-w-[200px] mx-auto pb-4 leading-relaxed">
                            Oportunidades exclusivas no litoral, condomínios, glebas e mais
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
