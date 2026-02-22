import { ChevronDown, Instagram, MessageCircle, Facebook, Search } from 'lucide-react'

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero.jpg"
                    alt="Kitesurfing Background"
                    className="h-full w-full object-cover animate-slow-movement brightness-110 contrast-110"
                />
                {/* Light Overlay for better contrast with dark text */}
                <div className="absolute inset-0 bg-white/20"></div>
            </div>

            {/* Language Selector (Floating) */}
            <div className="absolute left-10 top-32 z-30 hidden md:block">
                <button className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-colors border border-white/10 shadow-lg text-white">
                    <span className="font-bold">BR</span> Português <ChevronDown className="h-4 w-4" />
                </button>
            </div>

            {/* Social Icons Sidebar */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 z-30 hidden flex-col gap-5 items-center md:flex">
                <div className="h-16 w-[1px] bg-gradient-to-b from-transparent to-[#1a2e35]/60 mb-2"></div>
                <a href="#" className="text-[#1a2e35] hover:text-green-600 transition-colors hover:scale-110 transform duration-200" title="Instagram"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="text-[#1a2e35] hover:text-green-600 transition-colors hover:scale-110 transform duration-200" title="WhatsApp"><MessageCircle className="h-5 w-5" /></a>
                <a href="#" className="text-[#1a2e35] hover:text-green-600 transition-colors hover:scale-110 transform duration-200" title="Facebook"><Facebook className="h-5 w-5" /></a>
                <div className="h-16 w-[1px] bg-gradient-to-t from-transparent to-[#1a2e35]/60 mt-2"></div>
            </div>


            {/* Main Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center mt-[-60px]">
                <h1 className="mb-4 text-5xl font-avenir-heavy text-[#1a2e35] md:text-[5rem] leading-tight drop-shadow-sm tracking-tight">
                    Invista com o <br className="md:hidden" /> vento a favor.
                </h1>
                <p className="mb-10 max-w-3xl text-lg text-[#1a2e35] md:text-2xl font-medium drop-shadow-sm leading-relaxed">
                    Terrenos, casas e projetos exclusivos com segurança jurídica,<br className="hidden md:block" /> valorização real e suporte completo.
                </p>

                <button className="group flex items-center gap-3 rounded-lg bg-[#2E7D4D] px-8 py-4 text-lg font-bold text-white hover:bg-[#25663f] hover:shadow-xl transition-all shadow-lg transform hover:-translate-y-1 cursor-pointer">
                    <Search className="h-5 w-5 stroke-[3px]" /> Ver imóveis disponíveis
                </button>

                {/* Kites decorative icons falling (simulated positions) */}
                <div className="absolute top-[48%] right-[20%] opacity-80 pointer-events-none hidden md:block rotate-12">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#3c2f2f]"><path d="M12 2L2 22l10-2l10 2L12 2z" /></svg>
                </div>
                <div className="absolute top-[52%] right-[15%] opacity-60 pointer-events-none hidden md:block -rotate-12 scale-75">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-[#3c2f2f]"><path d="M12 2L2 22l10-2l10 2L12 2z" /></svg>
                </div>
            </div>

            <div className="absolute bottom-8 w-full text-center text-sm text-white/80 italic font-light tracking-wide pointer-events-none z-20">
                Atendimento e suporte em português, inglês e espanhol.
            </div>

            {/* Gradient Transition to Next Section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111820] to-transparent z-20"></div>
        </div>
    )
}
