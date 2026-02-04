"use client";

import { useState } from "react";
import { historicalRecords } from "@/data/history";

export default function HistoryPage() {
  const [sortBy, setSortBy] = useState<"wins" | "pct">("wins");

  const sortedRecords = [...historicalRecords].sort((a, b) => {
    if (sortBy === "wins") return b.wins - a.wins;
    if (sortBy === "pct")
      return (
        b.wins / (b.wins + b.losses) - a.wins / (a.wins + a.losses)
      );
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          HISTORICAL RECORDS
        </h1>
        <p className="text-xl text-stone-400">
          All-time head-to-head records vs every opponent
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Best Record vs", value: "NY Jets", detail: "12-3 (80%)" },
          {
            label: "Worst Record vs",
            value: "Dolphins",
            detail: "6-9 (40%)",
          },
          { label: "Most Games vs", value: "Rams", detail: "154 games" },
          { label: "Most Even vs", value: "Broncos", detail: "8-8 (50%)" },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-stone-900/50 rounded-xl p-4 border border-stone-800"
          >
            <p className="text-stone-500 text-sm">{stat.label}</p>
            <p className="text-white font-bold text-lg">{stat.value}</p>
            <p className="text-amber-500 text-sm">{stat.detail}</p>
          </div>
        ))}
      </div>

      {/* Records Table */}
      <div className="bg-stone-900/50 rounded-2xl border border-stone-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-800">
                <th className="text-left p-4 text-stone-400 font-semibold">
                  Opponent
                </th>
                <th
                  className="text-center p-4 text-stone-400 font-semibold cursor-pointer hover:text-amber-500"
                  onClick={() => setSortBy("wins")}
                >
                  W {sortBy === "wins" && "↓"}
                </th>
                <th className="text-center p-4 text-stone-400 font-semibold">
                  L
                </th>
                <th className="text-center p-4 text-stone-400 font-semibold">
                  T
                </th>
                <th
                  className="text-center p-4 text-stone-400 font-semibold cursor-pointer hover:text-amber-500"
                  onClick={() => setSortBy("pct")}
                >
                  Win% {sortBy === "pct" && "↓"}
                </th>
                <th className="text-center p-4 text-stone-400 font-semibold">
                  Playoff
                </th>
                <th className="text-center p-4 text-stone-400 font-semibold">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedRecords.map((record, i) => {
                const winPct = (
                  (record.wins /
                    (record.wins + record.losses + record.ties)) *
                  100
                ).toFixed(1);
                const isWinning = parseFloat(winPct) >= 50;

                return (
                  <tr
                    key={i}
                    className="border-b border-stone-800/50 hover:bg-stone-800/30 transition-colors"
                  >
                    <td className="p-4 text-white font-semibold">
                      {record.opponent}
                    </td>
                    <td className="p-4 text-center text-green-400 font-mono">
                      {record.wins}
                    </td>
                    <td className="p-4 text-center text-red-400 font-mono">
                      {record.losses}
                    </td>
                    <td className="p-4 text-center text-stone-500 font-mono">
                      {record.ties}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`font-semibold ${isWinning ? "text-green-400" : "text-red-400"}`}
                      >
                        {winPct}%
                      </span>
                    </td>
                    <td className="p-4 text-center text-stone-400">
                      {record.playoffWins !== undefined
                        ? `${record.playoffWins}-${record.playoffLosses}`
                        : "-"}
                    </td>
                    <td className="p-4 text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          record.streak.startsWith("W")
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {record.streak}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
