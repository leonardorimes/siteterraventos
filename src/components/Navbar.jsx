import { Menu, X, MessageCircle, Waves, ChevronDown, Instagram, Facebook, Search } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
    return (
        <>
            <nav className="relative z-50 flex justify-center px-6 py-5 md:px-12 bg-[#111820] w-full">
                <div className="flex w-full max-w-7xl items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src="/images/logo.png" alt="Terra Ventos" className="h-12 w-auto object-contain" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-8 md:flex">
                        <a href="#" className="text-xs font-semibold uppercase tracking-wide text-white hover:text-green-400 transition-colors">Imóveis</a>
                        <a href="#" className="text-xs font-semibold uppercase tracking-wide text-white hover:text-green-400 transition-colors">Terreno em Bitupitá</a>
                        <a href="#" className="text-xs font-semibold uppercase tracking-wide text-white hover:text-green-400 transition-colors">Lançamentos</a>
                        <a href="#" className="text-xs font-semibold uppercase tracking-wide text-white hover:text-green-400 transition-colors">Estudos dos Ventos</a>
                        <a href="#" className="text-xs font-semibold uppercase tracking-wide text-white hover:text-green-400 transition-colors">Sobre Nós</a>
                        <a href="#" className="text-xs font-semibold uppercase tracking-wide text-white hover:text-green-400 transition-colors">Contato</a>
                    </div>

                    {/* Action Button */}
                    <button className="hidden items-center gap-2 rounded bg-[#2E7D4D] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white hover:bg-[#25663f] transition-colors md:flex shadow-md cursor-pointer">
                        Fale Conosco <MessageCircle className="h-4 w-4 fill-white text-white" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden z-50 cursor-pointer text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Gradient Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md md:hidden space-y-8">
                    <a href="#" className="text-xl font-bold uppercase tracking-wide text-white">Imóveis</a>
                    <a href="#" className="text-xl font-bold uppercase tracking-wide text-white">Terreno em Bitupitá</a>
                    <a href="#" className="text-xl font-bold uppercase tracking-wide text-white">Lançamentos</a>
                    <a href="#" className="text-xl font-bold uppercase tracking-wide text-white">Estudos dos Ventos</a>
                    <a href="#" className="text-xl font-bold uppercase tracking-wide text-white">Sobre Nós</a>
                    <a href="#" className="text-xl font-bold uppercase tracking-wide text-white">Contato</a>
                    <button className="mt-8 flex items-center gap-2 rounded bg-[#2E7D4D] px-6 py-3 text-sm font-bold uppercase text-white shadow-lg">
                        Fale Conosco <MessageCircle className="h-5 w-5 fill-white text-white" />
                    </button>
                </div>
            )}
        </>
    )
}
