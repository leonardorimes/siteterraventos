import { Waves, MessageCircle } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="relative bg-[#0f1519] pt-20 pb-10 px-6 md:px-12 text-white border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <img src="/images/logo.png" alt="Terra Ventos Logo" className="h-20 w-auto mb-4 object-contain" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">
                    {/* Left: WhatsApp Community */}
                    <div className="border border-[#2E7D4D] bg-[#2E7D4D]/10 rounded-lg p-6 max-w-md">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            Comunidade Terra Ventos no WhatsApp <MessageCircle className="text-[#25D366] fill-[#25D366] h-5 w-5" />
                        </h3>
                        <p className="text-white/80 text-sm mb-6">
                            Fique por dentro de notícias e oportunidades antes de serem publicadas!
                        </p>
                        <button className="bg-[#2E7D4D] text-white font-bold px-6 py-3 rounded hover:bg-[#25663f] transition-colors text-sm uppercase w-full md:w-auto">
                            Entrar no grupo exclusivo
                        </button>
                    </div>

                    {/* Right: Address */}
                    <div className="text-right space-y-8 md:pl-20">
                        <div>
                            <h4 className="font-bold text-lg mb-1">Preá, Cruz, Ceará</h4>
                            <p className="text-white/60 text-sm font-light">
                                Rua Antônio Chagas, nº 857 - Preá, Cruz - CE, 62595-000
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Fortaleza, Ceará</h4>
                            <p className="text-white/60 text-sm font-light">
                                Rua Monsenhor Bruno, nº 1153, sala 608, Aldeota, Fortaleza - CE, 60115-191
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center border-t border-white/10 pt-8">
                    <p className="text-white/40 text-xs">
                        Todos os direitos reservados - Terra Ventos © 2026
                    </p>
                </div>
            </div>
        </footer>
    )
}
