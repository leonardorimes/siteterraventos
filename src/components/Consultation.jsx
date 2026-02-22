export default function Consultation() {
    return (
        <section className="relative bg-[#111820] py-24 px-6 md:px-12 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-avenir-heavy text-white mb-6">
                    Solicite uma consultoria<br />personalizada
                </h2>
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                    Fale diretamente com um de nossos especialistas para receber recomendações de investimento sob medida para seu perfil.
                </p>
                <button className="bg-[#2E7D4D] text-white font-bold px-10 py-4 rounded-md shadow-lg hover:bg-[#25663f] transition-all hover:scale-105 uppercase tracking-wide cursor-pointer text-lg">
                    Falar com consultor
                </button>
            </div>
        </section>
    )
}
