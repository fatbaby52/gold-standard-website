"use client";

import { useState } from "react";
import { roster2025 } from "@/data/roster";

function formatCurrency(amount: number): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  return `$${(amount / 1000).toFixed(0)}K`;
}

const positions = [
  "all",
  "QB",
  "RB",
  "WR",
  "TE",
  "LT",
  "RT",
  "C",
  "DE",
  "LB",
  "CB",
  "S",
];

export default function RosterPage() {
  const [sortBy, setSortBy] = useState<"capHit" | "salary">("capHit");
  const [filterPosition, setFilterPosition] = useState("all");

  const filteredRoster = roster2025
    .filter((p) => filterPosition === "all" || p.position === filterPosition)
    .sort((a, b) => b[sortBy] - a[sortBy]);

  const totalCapHit = roster2025.reduce((sum, p) => sum + p.capHit, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          2025 ROSTER & SALARIES
        </h1>
        <p className="text-xl text-stone-400 mb-4">
          Current 49ers roster with contract details
        </p>
        <div className="inline-flex items-center gap-4 bg-stone-900/50 px-6 py-3 rounded-xl border border-stone-800">
          <span className="text-stone-400">Total Cap Allocation:</span>
          <span className="text-amber-500 font-bold text-xl">
            {formatCurrency(totalCapHit)}
          </span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setFilterPosition(pos)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                filterPosition === pos
                  ? "bg-amber-500 text-stone-900"
                  : "bg-stone-800 text-stone-400 hover:bg-stone-700"
              }`}
            >
              {pos === "all" ? "All" : pos}
            </button>
          ))}
        </div>
      </div>

      {/* Roster Table */}
      <div className="bg-stone-900/50 rounded-2xl border border-stone-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-800">
                <th className="text-left p-4 text-stone-400 font-semibold">
                  #
                </th>
                <th className="text-left p-4 text-stone-400 font-semibold">
                  Player
                </th>
                <th className="text-left p-4 text-stone-400 font-semibold">
                  Pos
                </th>
                <th
                  className="text-right p-4 text-stone-400 font-semibold cursor-pointer hover:text-amber-500"
                  onClick={() => setSortBy("capHit")}
                >
                  Cap Hit {sortBy === "capHit" && "↓"}
                </th>
                <th
                  className="text-right p-4 text-stone-400 font-semibold cursor-pointer hover:text-amber-500"
                  onClick={() => setSortBy("salary")}
                >
                  AAV {sortBy === "salary" && "↓"}
                </th>
                <th className="text-center p-4 text-stone-400 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRoster.map((player, i) => (
                <tr
                  key={i}
                  className="border-b border-stone-800/50 hover:bg-stone-800/30 transition-colors"
                >
                  <td className="p-4 text-stone-500 font-mono">
                    {player.number}
                  </td>
                  <td className="p-4">
                    <span className="text-white font-semibold">
                      {player.name}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-stone-800 text-stone-300 px-2 py-1 rounded text-sm font-mono">
                      {player.position}
                    </span>
                  </td>
                  <td className="p-4 text-right text-amber-500 font-semibold">
                    {formatCurrency(player.capHit)}
                  </td>
                  <td className="p-4 text-right text-stone-400">
                    {formatCurrency(player.salary)}
                  </td>
                  <td className="p-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        player.status === "active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {player.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center text-stone-500 text-sm mt-6">
        Data sourced from Spotrac. Cap figures are estimates and may vary.
      </p>
    </div>
  );
}
