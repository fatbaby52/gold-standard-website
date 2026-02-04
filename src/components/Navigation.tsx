"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Play,
  Users,
  Trophy,
  BarChart3,
  Calendar,
  History,
  Newspaper,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Play },
  { href: "/contributors", label: "The Team", icon: Users },
  { href: "/facts", label: "49ers Facts", icon: Trophy },
  { href: "/roster", label: "Roster & Salaries", icon: BarChart3 },
  { href: "/schedule", label: "2025 Schedule", icon: Calendar },
  { href: "/history", label: "Historical Records", icon: History },
  { href: "/news", label: "News", icon: Newspaper },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-stone-950 to-stone-950/95 backdrop-blur-xl border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <span
                className="text-stone-900 font-black text-lg md:text-xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                G
              </span>
            </div>
            <div className="hidden sm:block">
              <h1
                className="text-lg md:text-xl font-black tracking-tight text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                GOLD STANDARD
              </h1>
              <p className="text-xs text-amber-500/80 tracking-widest uppercase">
                Podcast Network
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-stone-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-amber-500/10 mt-2 pt-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full px-4 py-3 text-left text-sm font-semibold transition-all flex items-center gap-3 ${
                    isActive
                      ? "bg-amber-500/20 text-amber-400"
                      : "text-stone-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
