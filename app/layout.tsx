import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StarBackground from "@/components/StarBackground";
import CustomCursor from "@/components/CustomCursor";
import { Plus_Jakarta_Sans, Syncopate } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta", 
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: "Janindu | Full-Stack Developer",
  description: "Next.js සහ MERN පාවිච්චි කරලා හදපු මගේ portfolio එක",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${syncopate.variable}`}>
      <body className="antialiased bg-black overflow-x-hidden">
        {/* 'manual' scroll restoration script එක අයින් කළා */}
        <SmoothScroll>
          <CustomCursor />
          <StarBackground />
          <Navbar />
          <main id="home">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}