export type TimePeriod = "month" | "quarter" | "year" | "all";

export function getDateFromTimestamp(timestamp: any): Date {
    return timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
}

export function isInPeriod(timestamp: any, period: TimePeriod): boolean {
    if (period === "all") return true;

    const date = getDateFromTimestamp(timestamp);
    const now = new Date();

    switch (period) {
        case "month":
            return (
                date.getFullYear() === now.getFullYear() &&
                date.getMonth() === now.getMonth()
            );
        case "quarter": {
            const currentQuarter = Math.floor(now.getMonth() / 3);
            const dateQuarter = Math.floor(date.getMonth() / 3);
            return (
                date.getFullYear() === now.getFullYear() &&
                dateQuarter === currentQuarter
            );
        }
        case "year":
            return date.getFullYear() === now.getFullYear();
        default:
            return true;
    }
}

export function getPeriodLabel(period: TimePeriod): string {
    const now = new Date();
    switch (period) {
        case "month":
            return now.toLocaleDateString("pt-BR", {
                month: "long",
                year: "numeric",
                timeZone: "America/Sao_Paulo",
            });
        case "quarter": {
            const q = Math.floor(now.getMonth() / 3) + 1;
            return `${q}º Trimestre de ${now.getFullYear()}`;
        }
        case "year":
            return `${now.getFullYear()}`;
        case "all":
            return "Todo o Tempo";
    }
}
