import { Trophy } from "lucide-react";
import { franchiseFacts } from "@/data/facts";

export default function FactsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          49ERS FRANCHISE FACTS
        </h1>
        <p className="text-xl text-stone-400">
          A legacy of excellence since 1946
        </p>
      </div>

      <div className="space-y-12">
        {franchiseFacts.map((section, i) => (
          <div key={i}>
            <h2
              className="text-2xl font-black text-amber-500 mb-6 flex items-center gap-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <Trophy className="text-amber-500" />
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="bg-stone-900/50 rounded-xl p-6 border border-stone-800 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.title}
                    </h3>
                    {item.year && (
                      <span className="text-amber-500 text-sm font-mono">
                        {item.year}
                      </span>
                    )}
                  </div>
                  <p className="text-stone-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
