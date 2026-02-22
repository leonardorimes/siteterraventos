export default function Founder() {
    return (
        <div className="relative w-full h-[600px] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <img
                src="/images/bernardo.png"
                alt="Bernardo Carvalho Wertheim"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            {/* Content Container - Centered max-w-7xl */}
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 max-w-7xl mx-auto">

                {/* Left: Title */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-avenir-heavy text-white leading-tight">
                        Conheça quem<br />
                        está por trás da<br />
                        Terra Ventos
                    </h2>
                </div>

                {/* Right: Bio */}
                <div className="w-full md:w-1/3 text-left mt-8 md:mt-0">
                    <h3 className="text-2xl font-bold text-white mb-1">Bernardo Carvalho<br />Wertheim</h3>
                    <div className="inline-block bg-[#1a2e35] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-6">
                        Fundador e CEO
                    </div>

                    <p className="text-white/90 text-sm md:text-base italic leading-relaxed">
                        Empreendedor com carreira internacional (ex-Bloomberg e Accenture) fundou a Terra Ventos com a missão de remodelar o mercado imobiliário litorâneo unindo impacto social, lifestyle e segurança.
                    </p>
                </div>
            </div>
        </div>
    )
}
