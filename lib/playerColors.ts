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

export function getContrastColor(hex: string): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? "#000000" : "#ffffff";
}
