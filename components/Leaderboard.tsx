"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Crown } from "lucide-react";
import PointsEvolutionChart from "@/components/PointsEvolutionChart";
import { getPlayerColor } from "@/lib/playerColors";

interface PlayerStats {
    id: string;
    name: string;
    avatar_url: string;
    stats: {
        wins: number;
        points: number;
        matchesPlayed: number;
    };
}

export default function Leaderboard() {
    const [players, setPlayers] = useState<PlayerStats[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = async () => {
        try {
            const playersRef = collection(db, "players");
            const q = query(playersRef, orderBy("stats.points", "desc"));
            const snapshot = await getDocs(q);

            const playersList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as PlayerStats));

            setPlayers(playersList);
        } catch (error) {
            console.error("Erro ao carregar jogadores:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <section id="classificacao" className="min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-stone-400">Carregando classificação...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="classificacao" className="min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center">
            <div className="max-w-5xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4">
                        Tabela de Classificação
                    </h2>
                    <p className="text-stone-400 text-lg">
                        Quem dominará o império?
                    </p>
                </div>

                {/* Points Evolution Chart */}
                <PointsEvolutionChart />

                {/* Leaderboard Table */}
                <div className="bg-stone-900/50 border border-stone-800 rounded-xl overflow-hidden backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-900/80 border-b border-stone-800">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Posição
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Jogador
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Pontos
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Vitórias
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Partidas
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider">
                                        Taxa de Vitória
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-800">
                                {players.map((player, index) => {
                                    const winRate = player.stats.matchesPlayed > 0
                                        ? ((player.stats.wins / player.stats.matchesPlayed) * 100).toFixed(0)
                                        : "0";

                                    const isTopPlayer = index === 0 && player.stats.points > 0;

                                    return (
                                        <tr
                                            key={player.id}
                                            className="hover:bg-stone-800/50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    {isTopPlayer && (
                                                        <Crown className="w-5 h-5 text-yellow-500 animate-pulse" />
                                                    )}
                                                    <span className={`text-2xl font-bold font-cinzel ${index === 0 ? "text-yellow-500" :
                                                        index === 1 ? "text-stone-300" :
                                                            index === 2 ? "text-amber-700" :
                                                                "text-stone-500"
                                                        }`}>
                                                        {index + 1}º
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className="w-3 h-3 rounded-full flex-shrink-0"
                                                        style={{ backgroundColor: getPlayerColor(player.name) }}
                                                    />
                                                    <img
                                                        src={player.avatar_url}
                                                        alt={player.name}
                                                        className="w-10 h-10 rounded-full ring-2 ring-yellow-700/50"
                                                    />
                                                    <span className="font-semibold text-lg">{player.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-2xl font-bold font-cinzel text-yellow-500">
                                                    {player.stats.points}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-lg font-semibold text-stone-300">
                                                    {player.stats.wins}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-lg text-stone-400">
                                                    {player.stats.matchesPlayed}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex items-center justify-center gap-1">
                                                    <span className="text-lg font-semibold text-stone-300">
                                                        {winRate}%
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
}
