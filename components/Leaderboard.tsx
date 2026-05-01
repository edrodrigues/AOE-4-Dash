"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Crown, TrendingUp } from "lucide-react";
import PointsEvolutionChart from "@/components/PointsEvolutionChart";
import PlayerAvatar from "@/components/PlayerAvatar";
import { logError } from "@/lib/logger";
import TimePeriodFilter from "@/components/TimePeriodFilter";
import { TimePeriod, isInPeriod } from "@/lib/periodFilter";

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

interface Match {
    id: string;
    date: any;
    results: {
        playerId: string;
        rank: number;
        points: number;
    }[];
}

export default function Leaderboard() {
    const [players, setPlayers] = useState<PlayerStats[]>([]);
    const [matches, setMatches] = useState<Match[]>([]);
    const [period, setPeriod] = useState<TimePeriod>("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadData();
    }, [period]);

    const loadData = async () => {
        try {
            // Load players
            const playersRef = collection(db, "players");
            const playersSnapshot = await getDocs(playersRef);

            // Load matches
            const matchesRef = collection(db, "matches");
            const matchesSnapshot = await getDocs(matchesRef);
            const allMatches = matchesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Match));

            // Filter matches by period
            const filteredMatches = allMatches.filter(m => isInPeriod(m.date, period));

            // Calculate stats dynamically based on filtered matches
            const playersWithStats = playersSnapshot.docs.map(doc => {
                const playerData = doc.data();
                const playerId = doc.id;
                
                const stats = {
                    wins: 0,
                    points: 0,
                    matchesPlayed: 0
                };

                filteredMatches.forEach(match => {
                    const result = match.results.find(r => r.playerId === playerId);
                    if (result) {
                        stats.matchesPlayed++;
                        stats.points += result.points;
                        if (result.rank === 1) stats.wins++;
                    }
                });

                return {
                    id: playerId,
                    name: playerData.name,
                    avatar_url: playerData.avatar_url,
                    stats
                } as PlayerStats;
            });

            // Sort by points desc
            playersWithStats.sort((a, b) => b.stats.points - a.stats.points);

            setPlayers(playersWithStats);
            setMatches(filteredMatches);
        } catch (error) {
            logError("Erro ao carregar dados", error, { component: 'Leaderboard', action: 'loadData' });
        } finally {
            setLoading(false);
        }
    };

    const calculatePPA = (playerId: string, matchesPlayed: number): number => {
        if (matchesPlayed === 0) return 0;

        let weightedPoints = 0;

        matches.forEach(match => {
            const playerResult = match.results.find(r => r.playerId === playerId);
            if (playerResult) {
                const numPlayers = match.results.length;
                let weight = 1;
                
                if (numPlayers === 3) {
                    weight = 1.5;
                } else if (numPlayers === 4) {
                    weight = 2;
                }

                weightedPoints += playerResult.points * weight;
            }
        });

        return weightedPoints / matchesPlayed;
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
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4">
                        Classificação
                    </h2>
                    <p className="text-stone-400 text-lg">
                        Quem dominará o império?
                    </p>
                </div>

                {/* Filter */}
                <TimePeriodFilter value={period} onChange={setPeriod} />

                {/* Points Evolution Chart */}
                <PointsEvolutionChart period={period} />

                {/* Leaderboard Table */}
                <div className="bg-stone-900/50 border border-stone-800 rounded-xl overflow-hidden backdrop-blur-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-900/80 border-b border-stone-800">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Posição do jogador no ranking baseado nos pontos totais">
                                        Posição
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Nome do jogador">
                                        Jogador
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Soma total de pontos ganhos em todas as partidas">
                                        Pontos
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Pontos por Partida Ajustados: Média de pontos ponderada pelo número de jogadores (2 jogadores = peso 1, 3 jogadores = peso 1.5, 4 jogadores = peso 2)">
                                        <div className="flex items-center justify-center gap-1">
                                            <TrendingUp className="w-3 h-3" />
                                            PPA
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Número total de partidas vencidas (1º lugar)">
                                        Vitórias
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Número total de partidas jogadas">
                                        Partidas
                                    </th>
                                    <th className="px-6 py-4 text-center text-xs font-semibold text-stone-400 uppercase tracking-wider cursor-help" title="Percentual de vitórias em relação ao total de partidas jogadas">
                                        Taxa de Vitória
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-800">
                                {players.map((player, index) => {
                                    const winRate = player.stats.matchesPlayed > 0
                                        ? ((player.stats.wins / player.stats.matchesPlayed) * 100).toFixed(0)
                                        : "0";

                                    const ppa = calculatePPA(player.id, player.stats.matchesPlayed);

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
                                                    <PlayerAvatar name={player.name} size="md" ring />
                                                    <span className="font-semibold text-lg">{player.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-2xl font-bold font-cinzel text-yellow-500">
                                                    {player.stats.points}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-lg font-semibold text-emerald-400" title="Pontos por Partida Ajustados">
                                                    {ppa.toFixed(2)}
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
