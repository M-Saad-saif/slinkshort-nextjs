import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S.LinkShortener - HOME | Your trusted link shortener",
  description:
    "Building a fast and secure Link Shortener website that converts long URLs into short, shareable links. The project focuses on clean UI, efficient redirection, and scalable backend logic.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen`}
      >
        
      
          <Navbar />
        {children}
      </body>
    </html>
  );
}
