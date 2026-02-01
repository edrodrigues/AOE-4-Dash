import { getPlayerColor, getContrastColor } from "@/lib/playerColors";

interface PlayerAvatarProps {
    name: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    ring?: boolean;
}

const sizeClasses = {
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
};

function getInitials(name: string): string {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
}

export default function PlayerAvatar({ name, size = "md", className = "", ring = false }: PlayerAvatarProps) {
    const bgColor = getPlayerColor(name);
    const textColor = getContrastColor(bgColor);
    const initials = getInitials(name);

    return (
        <div
            className={`rounded-full flex items-center justify-center font-semibold font-cinzel flex-shrink-0 ${sizeClasses[size]} ${ring ? "ring-2 ring-yellow-700/50" : ""} ${className}`}
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
        >
            {initials}
        </div>
    );
}
