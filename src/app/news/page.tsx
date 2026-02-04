import { Twitter, ExternalLink } from "lucide-react";

const newsLinks = [
  { name: "49ers Official", url: "https://www.49ers.com/news" },
  {
    name: "The Athletic - 49ers",
    url: "https://theathletic.com/nfl/team/san-francisco-49ers/",
  },
  {
    name: "ESPN - 49ers",
    url: "https://www.espn.com/nfl/team/_/name/sf/san-francisco-49ers",
  },
];

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          49ERS NEWS
        </h1>
        <p className="text-xl text-stone-400">
          Stay updated with the latest from Gold Standard
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Twitter Feed Placeholder */}
        <div className="lg:col-span-2">
          <h2
            className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <Twitter className="text-blue-400" />
            Latest from @GSN49ers
          </h2>
          <div className="bg-stone-900/50 rounded-xl border border-stone-800 p-6">
            <p className="text-stone-400 mb-4">
              Connect with us on Twitter for real-time updates, game reactions,
              and breaking news.
            </p>
            <a
              href="https://twitter.com/GSN49ers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Follow @GSN49ers
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Quick Links
          </h2>
          <div className="space-y-4">
            {newsLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-stone-900/50 rounded-lg border border-stone-800 hover:border-amber-500/30 transition-colors"
              >
                <span className="text-white font-medium">{link.name}</span>
                <ExternalLink size={16} className="text-stone-500" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
