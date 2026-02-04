import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gold Standard Podcast Network | San Francisco 49ers",
  description:
    "Your go-to source for all things San Francisco 49ers podcasts. Part of the Pro Football Insiders Network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-stone-950 text-white antialiased`}>
        <Navigation />
        <main className="pt-24 md:pt-28 pb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
