import {
  Headphones,
  Youtube,
  ChevronRight,
  Twitter,
  Instagram,
  ExternalLink,
} from "lucide-react";

const shows = [
  {
    name: "Gold Standard",
    desc: "The flagship show with in-depth 49ers analysis",
    color: "from-amber-500 to-amber-700",
  },
  {
    name: "Gold Diggers",
    desc: "Michelle & Rob break down picks and predictions",
    color: "from-red-500 to-red-700",
  },
  {
    name: "49ers in Five",
    desc: "Quick 5-minute daily updates",
    color: "from-stone-500 to-stone-700",
  },
  {
    name: "Under Review",
    desc: "Film breakdown and game analysis",
    color: "from-amber-600 to-red-600",
  },
  {
    name: "NFC West Mix Tape",
    desc: "Division coverage with Dan Viens",
    color: "from-blue-500 to-blue-700",
  },
];

const socials = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/GSN49ers",
    color: "hover:bg-blue-500/20 hover:border-blue-500/50",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@goldstandardnetwork",
    color: "hover:bg-red-500/20 hover:border-red-500/50",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/gsn49ers/",
    color: "hover:bg-pink-500/20 hover:border-pink-500/50",
  },
  {
    name: "Spotify",
    icon: Headphones,
    url: "https://open.spotify.com/show/3mWHKNWMdC6Pojka3tyBio",
    color: "hover:bg-green-500/20 hover:border-green-500/50",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-stone-950 to-amber-950" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='%23B3995D' fill-opacity='0.03'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-medium">
                Part of the Pro Football Insiders Network
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-white">GOLD</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                STANDARD
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your go-to source for the most passionate, informed, and
              compelling coverage of the{" "}
              <span className="text-red-500 font-semibold">
                San Francisco 49ers
              </span>
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://open.spotify.com/show/3mWHKNWMdC6Pojka3tyBio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105"
              >
                <Headphones size={24} />
                Listen on Spotify
                <ChevronRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://www.youtube.com/@goldstandardnetwork"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 border border-white/20"
              >
                <Youtube size={24} className="text-red-500" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* Shows Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-black text-white mb-8"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          OUR SHOWS
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show, i) => (
            <div
              key={i}
              className="group relative bg-stone-900/50 rounded-2xl p-6 border border-stone-800 hover:border-amber-500/50 transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${show.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {show.name}
              </h3>
              <p className="text-stone-400">{show.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className="text-3xl md:text-4xl font-black text-white mb-8"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          CONNECT WITH US
        </h2>
        <div className="flex flex-wrap gap-4">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 bg-stone-900/50 px-6 py-4 rounded-xl border border-stone-800 transition-all duration-300 ${social.color}`}
            >
              <social.icon size={24} className="text-white" />
              <span className="text-white font-semibold">{social.name}</span>
              <ExternalLink size={16} className="text-stone-500" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
