"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getPlayerColor } from "@/lib/playerColors";

interface Match {
    id: string;
    date: any;
    results: {
        playerId: string;
        rank: number;
        points: number;
    }[];
}

interface PlayerEvolution {
    id: string;
    name: string;
    color: string;
}

export default function PointsEvolutionChart() {
    const [chartData, setChartData] = useState<any[]>([]);
    const [players, setPlayers] = useState<PlayerEvolution[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadEvolutionData();
    }, []);

    const loadEvolutionData = async () => {
        try {
            // Get all players
            const playersRef = collection(db, "players");
            const playersSnapshot = await getDocs(playersRef);
            const playersMap = new Map(
                playersSnapshot.docs.map((doc) => [
                    doc.id,
                    {
                        id: doc.id,
                        name: doc.data().name,
                        color: getPlayerColor(doc.data().name)
                    }
                ])
            );

            // Get all matches ordered by date
            const matchesRef = collection(db, "matches");
            const q = query(matchesRef, orderBy("date", "asc"));
            const matchesSnapshot = await getDocs(q);

            const matches: Match[] = matchesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Match));

            // Calculate cumulative points for each player over time
            const playerPoints = new Map<string, number>();
            playersSnapshot.docs.forEach(doc => {
                playerPoints.set(doc.id, 0);
            });

            const evolutionData: any[] = [];

            // Add initial state (all players at 0)
            const initialPoint: any = {
                date: "Início",
                matchIndex: 0
            };
            playersMap.forEach((player, playerId) => {
                initialPoint[player.name] = 0;
            });
            evolutionData.push(initialPoint);

            // Process each match
            matches.forEach((match, index) => {
                // Update points for players in this match
                match.results.forEach(result => {
                    const currentPoints = playerPoints.get(result.playerId) || 0;
                    playerPoints.set(result.playerId, currentPoints + result.points);
                });

                // Create data point
                const dataPoint: any = {
                    date: match.date.toDate ? match.date.toDate().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) : `Partida ${index + 1}`,
                    matchIndex: index + 1
                };

                playersMap.forEach((player, playerId) => {
                    dataPoint[player.name] = playerPoints.get(playerId) || 0;
                });

                evolutionData.push(dataPoint);
            });

            setChartData(evolutionData);
            setPlayers(Array.from(playersMap.values()));
        } catch (error) {
            console.error("Erro ao carregar dados de evolução:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-8 mb-8">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-stone-400">Carregando evolução dos pontos...</p>
                </div>
            </div>
        );
    }

    if (chartData.length <= 1) {
        return (
            <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-8 mb-8">
                <p className="text-stone-400 text-center">
                    Nenhuma partida registrada ainda. Adicione partidas para ver a evolução dos pontos.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-cinzel text-yellow-400 mb-6 text-center">
                📈 Evolução dos Pontos
            </h3>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#44403c" />
                    <XAxis
                        dataKey="date"
                        stroke="#a8a29e"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        stroke="#a8a29e"
                        style={{ fontSize: '12px' }}
                        label={{ value: 'Pontos', angle: -90, position: 'insideLeft', fill: '#a8a29e' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1c1917',
                            border: '1px solid #44403c',
                            borderRadius: '8px',
                            color: '#e7e5e4'
                        }}
                    />
                    <Legend
                        wrapperStyle={{
                            paddingTop: '20px',
                            fontSize: '14px'
                        }}
                    />
                    {players.map(player => (
                        <Line
                            key={player.id}
                            type="monotone"
                            dataKey={player.name}
                            stroke={player.color}
                            strokeWidth={3}
                            dot={{ fill: player.color, r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
