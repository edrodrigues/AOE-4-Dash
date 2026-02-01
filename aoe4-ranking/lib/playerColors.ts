// Centralized player color configuration
export const PLAYER_COLORS: Record<string, string> = {
    "Ed": "#3b82f6",      // blue-500
    "Zeca": "#eab308",    // yellow-500
    "Ian": "#8b5cf6",     // violet-500
    "Jorge": "#ef4444",   // red-500
    "Samuka": "#10b981",  // green-500
};

export function getPlayerColor(playerName: string): string {
    return PLAYER_COLORS[playerName] || "#a8a29e"; // stone-400 as fallback
}
