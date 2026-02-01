import { Trophy } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen bg-stone-950 text-stone-100 flex flex-col items-center justify-center p-8 relative overflow-hidden font-sans">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-900/20 via-stone-950 to-stone-950 pointer-events-none" />

            <div className="z-10 text-center space-y-6 max-w-2xl">
                <div className="inline-flex items-center justify-center p-4 bg-yellow-900/10 rounded-full ring-1 ring-yellow-700/50 mb-4 animate-pulse">
                    <Trophy className="w-8 h-8 text-yellow-500" />
                </div>

                <h1 className="text-5xl md:text-7xl font-bold font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-lg font-cinzel">
                    A Era dos Reis
                </h1>

                <p className="text-stone-400 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed">
                    Acompanhando a ascensão e queda dos impérios. Apenas os mais fortes sobrevivem à linha do tempo.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-8">
                    <div className="p-6 rounded-lg bg-stone-900/50 border border-stone-800 backdrop-blur-sm">
                        <span className="block text-3xl font-bold text-yellow-500 font-cinzel">0</span>
                        <span className="text-xs text-stone-500 uppercase tracking-widest">Partidas</span>
                    </div>
                    <div className="p-6 rounded-lg bg-stone-900/50 border border-stone-800 backdrop-blur-sm">
                        <span className="block text-3xl font-bold text-yellow-500 font-cinzel">5</span>
                        <span className="text-xs text-stone-500 uppercase tracking-widest">Jogadores</span>
                    </div>
                </div>

                {/* Scroll Navigation */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
                    <a
                        href="#classificacao"
                        className="p-6 rounded-lg bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 border border-yellow-700/50 hover:border-yellow-600 transition-all backdrop-blur-sm group"
                    >
                        <h3 className="text-xl font-bold font-cinzel text-yellow-400 mb-2 group-hover:text-yellow-300">
                            🏆 Classificação
                        </h3>
                        <p className="text-stone-400 text-sm">
                            Veja a tabela de líderes
                        </p>
                    </a>

                    <a
                        href="#partidas"
                        className="p-6 rounded-lg bg-gradient-to-br from-stone-800/50 to-stone-900/30 border border-stone-700 hover:border-stone-600 transition-all backdrop-blur-sm group"
                    >
                        <h3 className="text-xl font-bold font-cinzel text-stone-300 mb-2 group-hover:text-stone-200">
                            📜 Histórico
                        </h3>
                        <p className="text-stone-400 text-sm">
                            Todas as partidas registradas
                        </p>
                    </a>

                    <a
                        href="#adicionar"
                        className="p-6 rounded-lg bg-gradient-to-br from-yellow-700/40 to-yellow-900/30 border border-yellow-600 hover:border-yellow-500 transition-all backdrop-blur-sm group"
                    >
                        <h3 className="text-xl font-bold font-cinzel text-yellow-300 mb-2 group-hover:text-yellow-200">
                            ➕ Nova Partida
                        </h3>
                        <p className="text-stone-400 text-sm">
                            Registrar resultados
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
}
