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
  title: "Faaiz Ahmed | Software Developer & Full Stack Developer",
  description:
    "Premium portfolio for Faaiz Ahmed showcasing modern software engineering, full stack development, and high-performance web experiences.",
  metadataBase: new URL("https://faaizahmed.dev"),
  openGraph: {
    title: "Faaiz Ahmed | Software Developer",
    description:
      "A premium portfolio experience built with modern web technologies, motion, and polished design.",
    type: "website",
    locale: "en_US",
    url: "https://faaizahmed.dev",
    siteName: "Faaiz Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faaiz Ahmed | Software Developer",
    description:
      "Modern portfolio for a software engineer, built with Next.js, Tailwind CSS, Three.js, and premium motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-black text-slate-100">{children}</body>
    </html>
  );
}
