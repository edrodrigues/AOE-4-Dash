"use client";

import { Trophy, Users, Crown, Medal } from "lucide-react";

export default function PointsExplanation() {
    return (
        <section className="bg-stone-950 border-t border-stone-800 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold font-cinzel text-yellow-500 mb-2">
                        Sistema de Pontos
                    </h3>
                    <p className="text-stone-400">
                        Entenda como os pontos são distribuídos nas partidas
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* 2 Jogadores */}
                    <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-5 h-5 text-blue-400" />
                            <h4 className="text-lg font-semibold text-blue-400">2 Jogadores</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Crown className="w-5 h-5 text-yellow-500" />
                                <span className="text-stone-200">1º Lugar: <span className="font-bold text-yellow-500">2 pontos</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-stone-500" />
                                <span className="text-stone-200">2º Lugar: <span className="font-bold text-stone-400">0 pontos</span></span>
                            </div>
                        </div>
                    </div>

                    {/* 3 Jogadores */}
                    <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-5 h-5 text-green-400" />
                            <h4 className="text-lg font-semibold text-green-400">3 Jogadores</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Crown className="w-5 h-5 text-yellow-500" />
                                <span className="text-stone-200">1º Lugar: <span className="font-bold text-yellow-500">3 pontos</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-stone-400" />
                                <span className="text-stone-200">2º Lugar: <span className="font-bold text-stone-300">2 pontos</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-stone-600" />
                                <span className="text-stone-200">3º Lugar: <span className="font-bold text-stone-400">1 ponto</span></span>
                            </div>
                        </div>
                    </div>

                    {/* 4 Jogadores */}
                    <div className="bg-stone-800/50 border border-stone-700 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-5 h-5 text-purple-400" />
                            <h4 className="text-lg font-semibold text-purple-400">4 Jogadores</h4>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Crown className="w-5 h-5 text-yellow-500" />
                                <span className="text-stone-200">1º Lugar: <span className="font-bold text-yellow-500">4 pontos</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-stone-300" />
                                <span className="text-stone-200">2º Lugar: <span className="font-bold text-stone-300">3 pontos</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-stone-500" />
                                <span className="text-stone-200">3º Lugar: <span className="font-bold text-stone-400">2 pontos</span></span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Medal className="w-5 h-5 text-stone-700" />
                                <span className="text-stone-200">4º Lugar: <span className="font-bold text-stone-500">0 pontos</span></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-stone-800/30 border border-stone-700 rounded-lg px-4 py-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-stone-400">
                            Os pontos são acumulados no ranking geral e determinam a posição dos jogadores na classificação
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}