import Link from "next/link";
import { Twitter, Youtube, Instagram } from "lucide-react";

const socials = [
  { icon: Twitter, url: "https://twitter.com/GSN49ers" },
  { icon: Youtube, url: "https://www.youtube.com/@goldstandardnetwork" },
  { icon: Instagram, url: "https://www.instagram.com/gsn49ers/" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-800 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
              <span
                className="text-stone-900 font-black text-lg"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                G
              </span>
            </div>
            <div>
              <p className="text-white font-bold">
                Gold Standard Podcast Network
              </p>
              <p className="text-stone-500 text-sm">
                Part of the Pro Football Insiders Network
              </p>
            </div>
          </Link>

          <div className="flex gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-stone-800 rounded-lg hover:bg-stone-700 transition-colors"
              >
                <social.icon size={20} className="text-stone-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-center text-stone-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Gold Standard Podcast Network. Not
            affiliated with the San Francisco 49ers or NFL.
          </p>
        </div>
      </div>
    </footer>
  );
}
