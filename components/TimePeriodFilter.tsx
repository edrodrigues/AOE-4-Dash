"use client";

import { CalendarDays, Calendar, CalendarRange, Infinity } from "lucide-react";
import { TimePeriod, getPeriodLabel } from "@/lib/periodFilter";

interface TimePeriodFilterProps {
    value: TimePeriod;
    onChange: (period: TimePeriod) => void;
}

const PERIODS: { value: TimePeriod; label: string; icon: React.ReactNode }[] = [
    { value: "month", label: "Mês", icon: <CalendarDays className="w-4 h-4" /> },
    { value: "quarter", label: "Trimestre", icon: <CalendarRange className="w-4 h-4" /> },
    { value: "year", label: "Ano", icon: <Calendar className="w-4 h-4" /> },
    { value: "all", label: "Todo o Tempo", icon: <Infinity className="w-4 h-4" /> },
];

export default function TimePeriodFilter({ value, onChange }: TimePeriodFilterProps) {
    return (
        <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-1 bg-stone-900/80 border border-stone-800 rounded-xl p-1 backdrop-blur-sm">
                {PERIODS.map((period) => {
                    const isActive = value === period.value;
                    return (
                        <button
                            key={period.value}
                            onClick={() => onChange(period.value)}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                                transition-all duration-200 whitespace-nowrap
                                ${isActive
                                    ? "bg-yellow-600 text-stone-950 shadow-lg shadow-yellow-900/30 scale-[1.02]"
                                    : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/60"
                                }
                            `}
                        >
                            {period.icon}
                            <span className="hidden sm:inline">{period.label}</span>
                        </button>
                    );
                })}
            </div>
            <p className="text-stone-500 text-xs">
                Exibindo: <span className="text-yellow-500/80 font-medium capitalize">{getPeriodLabel(value)}</span>
            </p>
        </div>
    );
}
