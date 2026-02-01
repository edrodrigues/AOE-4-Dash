"use client";

import { useEffect, useState } from "react";
import { Crown, Sword, Scroll, PlusCircle } from "lucide-react";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "classificacao", "partidas", "adicionar"];
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "hero", label: "Início", icon: Crown },
        { id: "classificacao", label: "Classificação", icon: Crown },
        { id: "partidas", label: "Histórico", icon: Scroll },
        { id: "adicionar", label: "Adicionar", icon: PlusCircle },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center gap-2 group">
                        <Crown className="w-6 h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                        <span className="font-bold font-cinzel text-lg text-yellow-500 group-hover:text-yellow-400 transition-colors hidden sm:block">
                            AOE4 Ranking
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="flex gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;

                            return (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${isActive
                                            ? "bg-yellow-700 text-stone-100"
                                            : "text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="hidden md:block font-semibold text-sm">{item.label}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}
