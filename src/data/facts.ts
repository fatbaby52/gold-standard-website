import { FranchiseFactSection } from "./types";

export const franchiseFacts: FranchiseFactSection[] = [
  {
    category: "Championships",
    items: [
      { title: "Super Bowl XVI", detail: "1981 Season - Beat Cincinnati Bengals 26-21", year: 1982 },
      { title: "Super Bowl XIX", detail: "1984 Season - Beat Miami Dolphins 38-16", year: 1985 },
      { title: "Super Bowl XXIII", detail: "1988 Season - Beat Cincinnati Bengals 20-16", year: 1989 },
      { title: "Super Bowl XXIV", detail: "1989 Season - Beat Denver Broncos 55-10", year: 1990 },
      { title: "Super Bowl XXIX", detail: "1994 Season - Beat San Diego Chargers 49-26", year: 1995 },
    ],
  },
  {
    category: "Hall of Famers",
    items: [
      { title: "Joe Montana", detail: "QB (1979-1992) - 4x Super Bowl Champion, 2x MVP", year: 2000 },
      { title: "Jerry Rice", detail: "WR (1985-2000) - 3x Super Bowl Champion, GOAT", year: 2010 },
      { title: "Steve Young", detail: "QB (1987-1999) - Super Bowl XXIX MVP", year: 2005 },
      { title: "Ronnie Lott", detail: "DB (1981-1990) - 4x Super Bowl Champion", year: 2000 },
      { title: "Charles Haley", detail: "DE/LB (1986-1991, 1999) - 5x Super Bowl Champion", year: 2015 },
    ],
  },
  {
    category: "Franchise Records",
    items: [
      { title: "Most Consecutive Road Wins", detail: "18 games (1988-1990)", year: null },
      { title: "Points in a Super Bowl", detail: "55 points (Super Bowl XXIV)", year: 1990 },
      { title: "Best Regular Season", detail: "15-1 record (1984)", year: 1984 },
      { title: "NFC Championship Appearances", detail: "19 total (most in NFC)", year: null },
      { title: "Division Titles", detail: "22 NFC West championships", year: null },
    ],
  },
];
