import { useState } from 'react'
import { ChevronDown, Maximize, Trees, DollarSign, Waves, ArrowDown, MapPin, X } from 'lucide-react'

export default function BitupitaProject() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <section className="relative bg-[#111820] py-20 px-6 md:px-12 text-[#e2d9c8]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-white/80 italic text-lg tracking-wide">Oportunidade pé na areia</span>
                    <h2 className="text-4xl md:text-5xl font-avenir-heavy text-[#b6a48e] mt-2">
                        Terreno em Bitupitá, Ceará
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Details */}
                    <div className="text-left space-y-8">
                        <div className="space-y-6 text-[#e2d9c8]/90 text-lg font-light leading-relaxed">
                            <p>
                                Propriedade excepcional de 4.300m² com geometria estratégica. Acesso urbano discreto de 10 metros e 14 metros de frente exclusiva para o oceano.
                            </p>
                            <p>
                                Documentação completamente validada, vizinhança definida e potencial único de valorização. Uma oportunidade rara para quem busca privacidade sem abrir mão da conectividade.
                            </p>
                        </div>

                        <div className="border-l-2 border-[#b6a48e]/30 pl-6 py-2">
                            <h4 className="text-[#b6a48e] italic mb-4 text-lg">Ficha Técnica:</h4>
                            <ul className="space-y-4 text-[#e2d9c8] font-medium">
                                <li className="flex items-center gap-3">
                                    <Maximize className="text-[#b6a48e] h-5 w-5" />
                                    <span>Área Total: <span className="text-white font-bold">4.300 m²</span></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Trees className="text-[#b6a48e] h-5 w-5" />
                                    <span>Área verde preservada: <span className="text-white font-bold">2.300m²</span></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <DollarSign className="text-[#b6a48e] h-5 w-5" />
                                    <span>Lotes desde 250m², a partir de <span className="text-white font-bold">R$ 80 mil</span></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Waves className="text-[#b6a48e] h-5 w-5" />
                                    <span>Frente Mar (Pé na areia): <span className="text-white font-bold">14,32 metros</span></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <ArrowDown className="text-[#b6a48e] h-5 w-5" />
                                    <span>146 metros de profundidade</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MapPin className="text-[#b6a48e] h-5 w-5" />
                                    <span>Entrada fácil, direto pela rua</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h4 className="text-[#b6a48e] italic mb-4 text-sm">Opções Flexíveis de Investimento:</h4>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-[#1a2e35] border border-white/10 rounded-lg p-4 text-center transform hover:scale-105 transition-transform cursor-pointer flex-1 min-w-[140px]">
                                    <div className="text-xs text-white/60 mb-1">Lote 250m²</div>
                                    <div className="text-xl font-bold text-white">R$ 80.000</div>
                                </div>
                                <div className="bg-[#1a2e35] border border-white/10 rounded-lg p-4 text-center transform hover:scale-105 transition-transform cursor-pointer flex-1 min-w-[140px]">
                                    <div className="text-xs text-white/60 mb-1">Lote 500m²</div>
                                    <div className="text-xl font-bold text-white">R$ 150.000</div>
                                </div>
                            </div>

                            {/* Map Restored to Left Column but Larger */}
                            <div>
                                <h4 className="text-[#b6a48e] italic mb-4 text-sm">Localização Estratégica:</h4>
                                <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
                                    <iframe
                                        src="https://maps.google.com/maps?q=Bitupit%C3%A1%2C%20Cear%C3%A1&t=&z=12&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-700"
                                    ></iframe>

                                    {/* Overlay Hint */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent pointer-events-none transition-colors duration-500 flex items-center justify-center">
                                        <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                                            Interagir com o mapa
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Media */}
                    <div className="flex flex-col gap-6">
                        {/* Video Placeholder */}
                        <div className="relative aspect-[9/16] w-full bg-black rounded-lg overflow-hidden shadow-2xl group">
                            {/* Iframe cropped to hide white borders */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
                                <iframe
                                    src="https://www.youtube.com/embed/nHRmiRez_HE?autoplay=1&mute=1&controls=0&loop=1&playlist=nHRmiRez_HE&rel=0&playsinline=1&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3"
                                    className="w-full h-full absolute inset-0 rounded-lg shadow-2xl pointer-events-none"
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                                {/* Invisible Overlay Link to Instagram */}
                                <a
                                    href="https://www.instagram.com/reel/DRdFlqDidey/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-20 cursor-pointer"
                                    aria-label="Ver no Instagram"
                                ></a>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <h4 className="text-[#b6a48e] italic text-sm">Galeria de fotos:</h4>
                                <span className="text-[10px] text-white/40 uppercase tracking-widest">Simulação da sua obra com IA</span>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    '/images/simulacao1.jpg',
                                    '/images/simulacao2.png',
                                    '/images/simulacao3.jpg'
                                ].map((img, index) => (
                                    <div
                                        key={index}
                                        className="aspect-square bg-[#1a2e35] rounded-md overflow-hidden cursor-pointer hover:opacity-80 transition-all hover:scale-105 border border-white/5"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img src={img} alt={`Simulação ${index + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/* CTA Center */}
                <div className="flex justify-center mt-16">
                    <button className="bg-[#2E7D4D] text-white font-bold px-10 py-4 rounded-md shadow-lg hover:bg-[#25663f] transition-all hover:scale-105 uppercase tracking-wide cursor-pointer text-lg">
                        Acessar projeto completo
                    </button>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 transition-opacity duration-300 animate-in fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={40} />
                    </button>
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Visualização Ampliada"
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}
