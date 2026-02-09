"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, doc, updateDoc, increment, Timestamp } from "firebase/firestore";
import { Trophy } from "lucide-react";
import PlayerAvatar from "@/components/PlayerAvatar";
import { logError, getUserFriendlyMessage } from "@/lib/logger";

interface Player {
    id: string;
    name: string;
    avatar_url: string;
}

interface SelectedPlayer extends Player {
    rank: number;
}

export default function AddMatchForm() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [selectedPlayers, setSelectedPlayers] = useState<SelectedPlayer[]>([]);
    const [date, setDate] = useState(new Date().toISOString().slice(0, 16));
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = async () => {
        const playersRef = collection(db, "players");
        const snapshot = await getDocs(playersRef);
        const playersList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Player));
        setPlayers(playersList);
    };

    const togglePlayer = (player: Player) => {
        const isSelected = selectedPlayers.find(p => p.id === player.id);

        if (isSelected) {
            setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
        } else {
            if (selectedPlayers.length >= 4) {
                alert("Máximo de 4 jogadores por partida!");
                return;
            }
            setSelectedPlayers([...selectedPlayers, { ...player, rank: selectedPlayers.length + 1 }]);
        }
    };

    const movePlayer = (index: number, direction: "up" | "down") => {
        const newPlayers = [...selectedPlayers];
        const targetIndex = direction === "up" ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex >= newPlayers.length) return;

        [newPlayers[index], newPlayers[targetIndex]] = [newPlayers[targetIndex], newPlayers[index]];

        // Update ranks
        newPlayers.forEach((p, i) => p.rank = i + 1);
        setSelectedPlayers(newPlayers);
    };

    const calculatePoints = (rank: number, totalPlayers: number): number => {
        if (totalPlayers === 2) {
            switch (rank) {
                case 1: return 2;
                case 2: return 0;
                default: return 0;
            }
        } else if (totalPlayers === 4) {
            switch (rank) {
                case 1: return 4;
                case 2: return 3;
                case 3: return 2;
                case 4: return 0;
                default: return 0;
            }
        } else {
            // 3 players
            switch (rank) {
                case 1: return 3;
                case 2: return 2;
                case 3: return 1;
                default: return 0;
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedPlayers.length < 2) {
            alert("Selecione pelo menos 2 jogadores!");
            return;
        }

        setLoading(true);

        try {
            // Create match document
            const matchData = {
                date: Timestamp.fromDate(new Date(date)),
                notes: notes || null,
                results: selectedPlayers.map(p => ({
                    playerId: p.id,
                    rank: p.rank,
                    points: calculatePoints(p.rank, selectedPlayers.length)
                }))
            };

            await addDoc(collection(db, "matches"), matchData);

            // Update player stats
            for (const player of selectedPlayers) {
                const playerRef = doc(db, "players", player.id);
                const points = calculatePoints(player.rank, selectedPlayers.length);

                await updateDoc(playerRef, {
                    "stats.points": increment(points),
                    "stats.matchesPlayed": increment(1),
                    "stats.wins": player.rank === 1 ? increment(1) : increment(0)
                });
            }

            setSuccess(true);
            setSelectedPlayers([]);
            setNotes("");
            setDate(new Date().toISOString().slice(0, 16));

            setTimeout(() => {
                setSuccess(false);
                window.location.href = "#classificacao";
                window.location.reload();
            }, 2000);

        } catch (error) {
            logError("Erro ao adicionar partida", error, { component: 'AddMatchForm', action: 'handleSubmit' });
            alert(getUserFriendlyMessage(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="adicionar" className="min-h-screen bg-stone-950 text-stone-100 p-8 font-sans flex items-center">
            <div className="max-w-3xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 mb-4">
                        Adicionar Partida
                    </h2>
                    <p className="text-stone-400 text-lg">
                        Registre os resultados da batalha
                    </p>
                </div>

                {success ? (
                    <div className="bg-green-900/20 border border-green-700/50 rounded-xl p-8 text-center">
                        <Trophy className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-green-400 mb-2">Partida Registrada!</h3>
                        <p className="text-stone-300">Indo para a classificação...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Date Input */}
                        <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6">
                            <label className="block text-sm font-semibold text-stone-400 mb-2 uppercase tracking-wider">
                                📅 Data e Hora
                            </label>
                            <input
                                type="datetime-local"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                                required
                            />
                        </div>

                        {/* Player Selection */}
                        <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6">
                            <label className="block text-sm font-semibold text-stone-400 mb-4 uppercase tracking-wider">
                                Selecione os Jogadores (2-4)
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {players.map(player => {
                                    const isSelected = selectedPlayers.find(p => p.id === player.id);
                                    return (
                                        <button
                                            key={player.id}
                                            type="button"
                                            onClick={() => togglePlayer(player)}
                                            className={`p-4 rounded-lg border-2 transition-all ${isSelected
                                                ? "border-yellow-700 bg-yellow-900/20"
                                                : "border-stone-700 bg-stone-800/50 hover:border-stone-600"
                                                }`}
                                        >
                                            <div className="mx-auto mb-2 flex justify-center">
                                                <PlayerAvatar name={player.name} size="lg" />
                                            </div>
                                            <p className="font-semibold text-center">{player.name}</p>
                                            {isSelected && (
                                                <p className="text-xs text-yellow-500 text-center mt-1">
                                                    Selecionado
                                                </p>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Ranking Order */}
                        {selectedPlayers.length > 0 && (
                            <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6">
                                <label className="block text-sm font-semibold text-stone-400 mb-4 uppercase tracking-wider">
                                    Ordem de Classificação (1º ao {selectedPlayers.length}º)
                                </label>
                                <div className="space-y-3">
                                    {selectedPlayers.map((player, index) => (
                                        <div
                                            key={player.id}
                                            className="flex items-center gap-4 p-4 bg-stone-800/50 rounded-lg"
                                        >
                                            <div className="flex flex-col gap-1">
                                                <button
                                                    type="button"
                                                    onClick={() => movePlayer(index, "up")}
                                                    disabled={index === 0}
                                                    className="text-stone-400 hover:text-stone-200 disabled:opacity-30"
                                                >
                                                    ▲
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => movePlayer(index, "down")}
                                                    disabled={index === selectedPlayers.length - 1}
                                                    className="text-stone-400 hover:text-stone-200 disabled:opacity-30"
                                                >
                                                    ▼
                                                </button>
                                            </div>

                                            <span className="text-3xl font-bold font-cinzel text-yellow-500 w-12">
                                                {index + 1}º
                                            </span>

                                            <PlayerAvatar name={player.name} size="md" />

                                            <span className="font-semibold flex-1">{player.name}</span>

                                            <span className="text-yellow-500 font-bold">
                                                +{calculatePoints(index + 1, selectedPlayers.length)} pts
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Notes */}
                        <div className="bg-stone-900/50 border border-stone-800 rounded-xl p-6">
                            <label className="block text-sm font-semibold text-stone-400 mb-2 uppercase tracking-wider">
                                Observações (Opcional)
                            </label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Ex: Partida épica no mapa Black Forest..."
                                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:ring-2 focus:ring-yellow-700 resize-none"
                                rows={3}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading || selectedPlayers.length < 2}
                            className="w-full px-6 py-4 bg-yellow-700 hover:bg-yellow-600 disabled:bg-stone-700 disabled:cursor-not-allowed rounded-lg transition-colors font-semibold text-lg"
                        >
                            {loading ? "Salvando..." : "⚔️ Registrar Partida"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
