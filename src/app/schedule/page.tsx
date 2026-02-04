import { schedule2025 } from "@/data/schedule";

export default function SchedulePage() {
  const record = schedule2025
    .filter((g) => g.result)
    .reduce(
      (acc, g) => {
        if (g.result === "W") acc.wins++;
        else if (g.result === "L") acc.losses++;
        return acc;
      },
      { wins: 0, losses: 0 }
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          2025 SCHEDULE
        </h1>
        <div className="inline-flex items-center gap-4 bg-stone-900/50 px-6 py-3 rounded-xl border border-stone-800">
          <span className="text-stone-400">Season Record:</span>
          <span className="text-white font-bold text-2xl">
            {record.wins}-{record.losses}
          </span>
          <span className="text-amber-500">| Wild Card Team</span>
        </div>
      </div>

      <div className="grid gap-3">
        {schedule2025.map((game, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
              game.result === "W"
                ? "bg-green-500/5 border-green-500/20"
                : game.result === "L"
                  ? "bg-red-500/5 border-red-500/20"
                  : game.location === "bye"
                    ? "bg-stone-800/30 border-stone-700"
                    : "bg-stone-900/50 border-stone-800"
            }`}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-stone-800 rounded-lg text-stone-400 font-mono text-sm">
              WK{game.week}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                {game.location !== "bye" && (
                  <span className="text-xs text-stone-500 uppercase">
                    {game.location === "home" ? "vs" : "@"}
                  </span>
                )}
                <span className="text-white font-semibold">
                  {game.opponent}
                </span>
                {game.primetime && (
                  <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded font-semibold">
                    {game.primetime}
                  </span>
                )}
              </div>
            </div>

            {game.result && (
              <div className="flex items-center gap-3">
                <span
                  className={`font-bold ${game.result === "W" ? "text-green-400" : "text-red-400"}`}
                >
                  {game.result}
                </span>
                <span className="text-white font-mono">{game.score}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-stone-900/50 rounded-xl border border-stone-800">
        <h3
          className="text-xl font-bold text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          2025 Playoff Run
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
            <span className="text-green-400 font-semibold">Wild Card</span>
            <span className="text-white">vs Philadelphia Eagles</span>
            <span className="text-green-400 font-bold ml-auto">W</span>
          </div>
          <div className="flex items-center gap-4 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
            <span className="text-red-400 font-semibold">Divisional</span>
            <span className="text-white">@ Seattle Seahawks</span>
            <span className="text-red-400 font-bold ml-auto">L 6-41</span>
          </div>
        </div>
      </div>
    </div>
  );
}
