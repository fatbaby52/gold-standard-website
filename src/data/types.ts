export interface Contributor {
  name: string;
  nickname?: string;
  role: string;
  bio: string;
  image: string;
  twitter: string | null;
  favoritePlayer: string;
  favoriteMemory: string;
}

export interface Player {
  name: string;
  number: number;
  position: string;
  salary: number;
  capHit: number;
  years: number;
  status: "active" | "IR";
}

export interface Game {
  week: number;
  opponent: string;
  location: "home" | "away" | "bye";
  result: "W" | "L" | null;
  score: string | null;
  primetime?: string;
}

export interface HeadToHead {
  opponent: string;
  wins: number;
  losses: number;
  ties: number;
  playoffWins: number;
  playoffLosses: number;
  streak: string;
}

export interface FranchiseFactItem {
  title: string;
  detail: string;
  year: number | null;
}

export interface FranchiseFactSection {
  category: string;
  items: FranchiseFactItem[];
}
