"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { Calendar, Trophy } from "lucide-react";
import { getPlayerColor } from "@/lib/playerColors";

interface Match {
    id: string;
    date: any;
    notes?: string;
    results: {
        playerId: string;
        playerName?: string;
        rank: number;
        points: number;
    }[];
}

export default function MatchHistory() {
    const [matches, setMatches] = useState<Match[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMatches();
    }, []);

    const loadMatches = async () => {
        try {
            const matchesRef = collection(db, "matches");
            const q = query(matchesRef, orderBy("date", "desc"));
            const snapshot = await getDocs(q);

            // Get player names
            const playersRef = collection(db, "players");
            const playersSnapshot = await getDocs(playersRef);
            const playersMap = new Map(
                playersSnapshot.docs.map(doc => [doc.id, doc.data().name])
            );

            const matchesList = snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    date: data.date,
                    notes: data.notes,
                    results: data.results.map((r: any) => ({
                        ...r,
                        playerName: playersMap.get(r.playerId) || "Desconhecido"
                    })).sort((a: any, b: any) => a.rank - b.rank)
                };
            });

            setMatches(matchesList);
        } catch (error) {
            console.error("Erro ao carregar partidas:", error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (timestamp: any) => {
        if (!timestamp) return "Data desconhecida";
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return new Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    };

    const getRankEmoji = (rank: number) => {
        switch (rank) {
            case 1: return "🥇";
            case 2: return "🥈";
            case 3: return "🥉";
            case 4: return "4️⃣";
            default: return "";
        }
    };

    if (loading) {
        return (
            <section id="partidas" className="min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-stone-400">Carregando histórico...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="partidas" className="min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center">
            <div className="max-w-4xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4">
                        Histórico de Partidas
                    </h2>
                    <p className="text-stone-400 text-lg">
                        Todas as batalhas registradas
                    </p>
                </div>

                {/* Matches List */}
                {matches.length === 0 ? (
                    <div className="text-center py-16 bg-stone-900/50 border border-stone-800 rounded-xl">
                        <Trophy className="w-16 h-16 text-stone-600 mx-auto mb-4" />
                        <p className="text-stone-400 text-lg mb-6">
                            Nenhuma partida registrada ainda.
                        </p>
                        <a
                            href="#adicionar"
                            className="inline-block px-6 py-3 bg-yellow-700 hover:bg-yellow-600 rounded-lg transition-colors font-semibold"
                        >
                            + Adicionar Primeira Partida
                        </a>
                    </div>
                ) : (
                    <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-stone-700 scrollbar-track-stone-900">
                        {matches.map((match) => (
                            <div
                                key={match.id}
                                className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 backdrop-blur-sm hover:border-yellow-700/50 transition-colors"
                            >
                                {/* Match Header */}
                                <div className="flex items-center gap-2 text-stone-400 text-sm mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>{formatDate(match.date)}</span>
                                </div>

                                {/* Results */}
                                <div className="space-y-3">
                                    {match.results.map((result, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center justify-between p-3 rounded-lg ${result.rank === 1
                                                ? "bg-yellow-900/20 border border-yellow-700/30"
                                                : "bg-stone-800/30"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">{getRankEmoji(result.rank)}</span>
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: getPlayerColor(result.playerName || "") }}
                                                />
                                                <div>
                                                    <p className="font-semibold text-lg">{result.playerName}</p>
                                                    <p className="text-xs text-stone-500">{result.rank}º Lugar</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold font-cinzel text-yellow-500">
                                                    +{result.points}
                                                </p>
                                                <p className="text-xs text-stone-500">pontos</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Notes */}
                                {match.notes && (
                                    <div className="mt-4 pt-4 border-t border-stone-800">
                                        <p className="text-sm text-stone-400 italic">
                                            📝 {match.notes}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
