import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novikov Studio — iOS Development Studio in NYC",
  description:
    "Novikov Studio LLC is a New York City-based iOS development studio crafting polished, user-first mobile experiences.",
  openGraph: {
    title: "Novikov Studio — iOS Development Studio in NYC",
    description:
      "NYC-based iOS development studio crafting polished, user-first mobile experiences.",
    url: "https://novikov-studio.com",
    siteName: "Novikov Studio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
