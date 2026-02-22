import { Users, TrendingUp } from 'lucide-react'

export default function About() {
    return (
        <section className="relative bg-[#1a2e35] py-24 px-6 md:px-12 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-avenir-heavy text-white mb-6">
                        Conheça a Terra Ventos
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left: Text */}
                    <div className="space-y-8 text-lg font-light leading-relaxed text-white/90">
                        <p>
                            Somos especialistas em imóveis de alto padrão no litoral do Ceará. Transformamos oportunidades em investimentos sólidos, com segurança jurídica e atendimento de excelência.
                        </p>
                        <p>
                            Atuamos com análise jurídica rigorosa, curadoria especializada e assessoria completa para compra e venda de imóveis no litoral do Ceará.
                        </p>
                        <p>
                            Nossa missão é conectar compradores e vendedores com segurança, transparência e máxima eficiência.
                        </p>
                        <p>
                            Cada transação é conduzida com discrição e profissionalismo, garantindo que seu investimento seja protegido em todas as etapas do processo.
                        </p>
                    </div>

                    {/* Right: Why Choose Us Cards */}
                    <div>
                        <h3 className="text-[#b6a48e] font-bold text-xl mb-8">Porque escolher a Terra Ventos?</h3>
                        <div className="space-y-6">
                            {/* Card 1 */}
                            <div className="border border-white/20 rounded-xl p-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <Users className="text-[#b6a48e] h-6 w-6" />
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Networking Global</h4>
                                </div>
                                <p className="text-sm text-white/70 pl-9">
                                    Se conecte com investidores e atletas do Brasil e do mundo.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-white/20 rounded-xl p-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingUp className="text-[#b6a48e] h-6 w-6" />
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Valorização & Insights</h4>
                                </div>
                                <p className="text-sm text-white/70 pl-9">
                                    Curadoria baseada em dados e tendências de turismo.
                                </p>
                            </div>

                            {/* Card 3 - Repeating concept as per image */}
                            <div className="border border-white/20 rounded-xl p-6 hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <TrendingUp className="text-[#b6a48e] h-6 w-6" />
                                    <h4 className="font-bold text-white uppercase tracking-wider text-sm">Valorização & Insights</h4>
                                </div>
                                <p className="text-sm text-white/70 pl-9">
                                    Curadoria baseada em dados e tendências de turismo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
