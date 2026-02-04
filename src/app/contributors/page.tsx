import { contributors } from "@/data/contributors";

export default function ContributorsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          MEET THE TEAM
        </h1>
        <p className="text-xl text-stone-400 max-w-2xl mx-auto">
          The voices behind the Gold Standard Podcast Network
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {contributors.map((person, i) => (
          <div
            key={i}
            className="group relative bg-gradient-to-br from-stone-900 to-stone-950 rounded-3xl overflow-hidden border border-stone-800 hover:border-amber-500/50 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                    {person.nickname || person.name.split(" ")[0]}
                  </div>
                </div>

                <div className="flex-1">
                  <h3
                    className="text-2xl font-black text-white mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {person.name}
                  </h3>
                  <p className="text-amber-500 font-semibold mb-3">
                    {person.role}
                  </p>
                  <p className="text-stone-400 leading-relaxed mb-4">
                    {person.bio}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-stone-500">Favorite Player:</span>
                      <span className="text-white font-medium">
                        {person.favoritePlayer}
                      </span>
                    </div>
                    <div className="text-stone-500">
                      <span className="block mb-1">
                        Favorite 49ers Memory:
                      </span>
                      <span className="text-stone-300 text-xs">
                        {person.favoriteMemory}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
